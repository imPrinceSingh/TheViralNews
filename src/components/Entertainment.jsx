import News from "./News"

const Entertainment = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=entertainment"} pages={pages} func={func}/></div>
  )
}

export default Entertainment