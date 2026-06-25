import { useEffect, useState } from "react";

export default function useFetch(url, category, slugs){
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dataBySlugs, setDataBySlugs] = useState({})
  const [dataByCategory, setDataByCategory] = useState([])

  useEffect(() => {
    async function getData(count = 3) {
      try{
        setIsLoading(true)
        
			  // guard clause
        if(!url) throw new Error("Url path is not valid")
        if(typeof url !== "string") throw new Error("Url must be a string")

        const res = await fetch(url)
        const data = await res.json()
        const slugsSelector = data.filter((item) => item.slugs === slugs)[0]
        const categoriesSelector = data.filter((item) => item.cat?.id === category)
        
        setDataByCategory(categoriesSelector)
        setDataBySlugs(slugsSelector)
        setData(data)
      } catch(err){
        if(count >=1 ) getData(count-1)  // will retry 3 times if error happend
      	console.error(err.message)
      } finally{
        setIsLoading(false) // unmount loading
      }
    }
	  getData()

  },[url, category, slugs])

	 return {data, dataBySlugs, dataByCategory, isLoading}
}