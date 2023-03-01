import { useEffect, useState } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [next, setNext] = useState(0)
    const [load,setLoad] = useState(true)
    useEffect(() => {
        async function getData() {
            setLoad(true)
            const get = await fetch(url)
            const res = await get.json();
            if (res.status === "ok") {
                if (res.totalResults === 0) {
                    setData(
                        [{
                            "author": "Unavilabe",
                            "title": "Search another keyword",
                            "description": null,
                            "url": null,
                            "urlToImage": "https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=768x576&vertical=top",
                            "publishedAt": "---",
                            "content": null
                        }])
                }
                else {
                     setData(res.articles)
                     setNext(Math.ceil(res.totalResults/10))
                }
            }
        
            setLoad(false)
        }
        getData();
        setLoad(true)

    }, [url])

    return [data,next,load]
}

export default useFetch