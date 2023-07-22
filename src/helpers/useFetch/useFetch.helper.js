import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (actionUrl, methods, body) =>{
    const [data, setData] = useState()

    const fetchData = async() => {
    const res = await axios({method: methods ?? 'GET', url: `https://fakestoreapi.com/${actionUrl}`, body: body})
        const result = await res.data

        setData(result)
    }

    useEffect(()=>{
            fetchData()
    },[actionUrl])


    return {data}
    
}