import { ChangeEvent, useReducer } from 'react'

const initialState = {
  value: '',
  inputTouch: false,
  inputValid: false,
}

type inputStateType = {
  value: string
  inputTouch: boolean
  inputValid: boolean
}

type inputUpdateActionTypes = {
  type: 'user_input'
  payload: {
    value: string
    error: string | boolean
  }
}

type inputActionTypes = {
  type: 'reset' | 'blur_input'
}

const reducer = (state: inputStateType, action: inputUpdateActionTypes | inputActionTypes) => {
  switch (action.type) {
    case 'user_input':
      return {
        ...state,
        value: action.payload.value,
        inputValid: action.payload.error ? false : true,
      }
    case 'blur_input':
      return {
        ...state,
        inputTouch: true,
      }
    case 'reset':
      return {
        value: '',
        inputTouch: false,
        inputValid: false,
      }

    default:
      return state
  }
}

type inputValidation = (value: string) => string

const useInput = (validationFunc: inputValidation) => {
  const [inputState, dispatch] = useReducer(reducer, initialState)
  const error = inputState.inputTouch && validationFunc(inputState.value)

  const inputChangeHandler = (input_val: string) => {
    dispatch({
      type: 'user_input',
      payload: {
        value: input_val,
        error: error,
      },
    })
    // (event.target.value)
  }

  const inputBlurHandler = () => {
    dispatch({
      type: 'blur_input',
    })
  }

  return {
    inputState,
    inputChangeHandler,
    error,
    inputBlurHandler,
  }
}

export default useInput
