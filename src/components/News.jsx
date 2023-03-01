import useFetch from './useFatch'
import { ThreeDots } from 'react-loader-spinner'
import { useEffect } from 'react'
import def_img from '../Images/TVN_logo.JPG'
import api from '../Key.json'

const News = ({category,pages,func}) => {
     const [data,next,load] = useFetch(`https://newsapi.org/v2/top-headlines?${category}&apiKey=${api.key}&page=${pages}&pagesize=10`)
     func(next)
     useEffect(()=>{
     },[load])
    return (
        <div className="box">           
            {data.map((e, index) => {               
                return (
                    load === true ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#30353e" /> :
                     
                    <div className='div' key={index}>
                        <a href={e.url} target="_blank" rel='noreferrer'><img src={e.urlToImage ? e.urlToImage : def_img} alt="img"/></a>
                        <div className='newsbox'>
                            <h3 className='title'> {e.title.slice(0, 100)}...</h3>
                            <p className='author'>Source: {e.author ? e.author : "Unknown"}</p>
                            <p className='boxFooter'>Time: {e.publishedAt.slice(0, 19)} &emsp; <a href={e.url} target="_blank" rel="noreferrer">  Read more </a></p>
                        </div>
                    </div>
                    )
            })}
        </div>
    )
}

News.defaultProps={
    category:"country=in",
    pages:1
}

export default News