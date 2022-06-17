// import React, { ChangeEvent } from 'react'

type inputFieldProps = {
  value: string | number
  handleChange: (value: string) => void
  placeholder: string
  label: string
  className?: string
  type: string
  blurHandler: () => void
  error: string | boolean
}

const removeUnderScore = (value: string) => {
  const arr = value.split('_')
  if (arr.length < 2) return value

  let result: string = ''
  for (let val of arr) {
    result = result + val + ' '
  }
  return result
}

const InputField = (props: inputFieldProps) => {
  return (
    <div className={props.className}>
      <label className='label-text text-lg text-medium capitalize' htmlFor={props.label}>
        {removeUnderScore(props.label)}
      </label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChange(event.target.value)}
        value={props.value}
        name={props.label}
        id={props.label}
        type={props.type}
        onBlur={props.blurHandler}
        className='input input-bordered input-primary w-full focus:outline-none'
        placeholder={props.placeholder}
      />
      {props.error && <p className='text-red-500'>{props.error}</p>}
    </div>
  )
}

export default InputField
