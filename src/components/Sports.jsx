import News from "./News"

const Sports = ({pages,func}) => {
  return (
    <div><News category={"country=in&category=sports"} pages={pages} func={func}/></div>
  )
}

export default Sports