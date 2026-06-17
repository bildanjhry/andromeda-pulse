import { useEffect, useState } from "react";

export default function useFetch(url){
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getData(count = 3) {
      try{
        setIsLoading(true)
			  // url validation
        if(!url) throw new Error("Url path is not valid")
        if(typeof url !== "string") throw new Error("Url must be a string")

        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      } catch(err){
        if(count >=1 ) getData(count-1)  // will retry 3 times if error happend
      	console.error(err.message)
      } finally{
        setIsLoading(false) // unmount loading
      }
    }
	  getData()
  },[url])

	 return {data, isLoading}
}