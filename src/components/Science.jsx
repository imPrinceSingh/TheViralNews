import News from "./News"

const Science = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=science"} pages={pages} func={func}/></div>
  )
}

export default Science