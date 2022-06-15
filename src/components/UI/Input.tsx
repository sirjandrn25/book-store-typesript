type inputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: inputProps) => {
  return (
    <input
      onChange={props.handleChange}
      value={props.value}
      className='input input-bordered input-primary w-full focus:outline-none'
      placeholder='Enter Book title'
    />
  )
}
