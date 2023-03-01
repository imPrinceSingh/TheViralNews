import News from "./News"
import { memo } from "react"
const Search = ({value,pages,func}) => {
    
return (
<div>
    {(()=>{
        if(value===""){
            return <><h1>Search Result For "{value}"</h1> 
            <News category={`q="_blank"`} func={func}/></>
                    
        }
        else{
            return <><h1>Search Results For "{value}"</h1> 
            <News category={`q=${value}`} pages={pages} func={func}/></>
        }
    })()}

        
    </div>
    )
}

export default memo(Search)