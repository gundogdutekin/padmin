import './card.scss'

type Props = {
  title: string,
  children: React.ReactNode
}

const Card = ({title,children}: Props) => {
  return (
    <div className='card'>
      <h2 className="title">{title}</h2>
      <div className="content">{children}</div>
      </div>
  )
}

export default Card