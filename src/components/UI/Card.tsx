type cardProps = {
  children: React.ReactNode
  className?: string
}
const Card = (props: cardProps) => {
  return <div className={`shadow-lg rounded-lg p-7 ${props.className}`}>{props.children}</div>
}

export default Card
