import News from "./News"

const Health = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=health"} pages={pages} func={func}/></div>
  )
}

export default Health