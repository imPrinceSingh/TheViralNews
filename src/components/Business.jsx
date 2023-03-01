import News from "./News"

const Business = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=business"} pages={pages} func={func}/></div>
  )
}

export default Business