type inputProps = {
  value: string | number
  handleChange: (value: string) => void
  placeholder: string
  label: string
  className?: string
  type: string
  blurHandler: () => void
  error: string | boolean
}
export const Input = (props: inputProps) => {
  return (
    <>
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
    </>
  )
}
