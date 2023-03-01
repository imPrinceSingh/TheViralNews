import News from "./News"

const General = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=general"} pages={pages} func={func}/></div>
  )
}

export default General