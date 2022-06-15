import React, { ChangeEvent } from 'react'

type selectFieldProps = {
  value: string | number
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void

  label: string
  className: string
  options: string[]
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
      {/* <input
        onChange={props.handleChange}
        value={props.value}
        name={props.label}
        id={props.label}
        type={props.type}
        className='input input-bordered input-primary w-full focus:outline-none'
        placeholder={props.placeholder}
      /> */}
      <select
        name={props.label}
        className='select select-primary w-full focus:outline-none'
        onChange={props.handleChange}
        value={props.value}
        id={props.label}>
        {props.value === '' ? <option selected>choose {props.label}</option> : null}
        {props.options.map((opVal) => (
          <option value={opVal} key={opVal}>
            {opVal}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
