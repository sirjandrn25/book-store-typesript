import React, { ChangeEvent } from 'react'

type selectFieldProps = {
  value: string | number
  handleChange: (value: string) => void

  label: string
  className?: string
  options: string[]
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

const SelectField = (props: selectFieldProps) => {
  return (
    <div className={props.className}>
      <label className='label-text text-lg text-medium capitalize' htmlFor={props.label}>
        {removeUnderScore(props.label)}
      </label>

      <select
        name={props.label}
        className='select select-primary w-full focus:outline-none'
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => props.handleChange(event.target.value)}
        value={props.value}
        onBlur={props.blurHandler}
        id={props.label}>
        {props.value === '' ? <option value=''>choose {props.label}</option> : null}
        {props.options.map((opVal) => (
          <option value={opVal} key={opVal}>
            {opVal}
          </option>
        ))}
      </select>
      {props.error && <p className='text-red-500'>{props.error}</p>}
    </div>
  )
}

export default SelectField
