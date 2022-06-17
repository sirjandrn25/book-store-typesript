type selectProps = {
  value: string | number
  handleChange: (value: string) => void

  label: string
  className?: string
  options: string[]
  blurHandler: () => void
}

const Select = (props: selectProps) => {
  return (
    <select
      name={props.label}
      className={`select select-primary w-full focus:outline-none ${props.className}`}
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
  )
}

export default Select
