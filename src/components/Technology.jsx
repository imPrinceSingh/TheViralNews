import News from './News'

const Technology = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=Technology"} pages={pages} func={func}/></div>
  )
}

export default Technology