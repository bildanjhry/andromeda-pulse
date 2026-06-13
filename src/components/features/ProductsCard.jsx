import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Card(){
  const [datas, setDatas] = useState([])

  useEffect(() => {
    async function getProducts(){
      const apiUrl = "/data/products.json"
      const res = await fetch(apiUrl)
      const data = await res.json()
      console.log(data)
      setDatas(data)
    }

    getProducts()
  },[])


  return(
    <div className="grid grid-cols-4 gap-3">
      {datas?.map((item, index) => (
        <Link
          key={index}
          to={`/details/${item.id}`} 
          className="bg-(--container-bg) border-light rounded-xl h-[420px]">
          <header className="w-full h-[70%] relative">
            <img 
              className="h-full w-full"
              src={item.image} alt="product" />
          </header>
          <main className="flex flex-col pl-6">
            <p className="text-xs">{item.brand}</p>
            <p className="text-h font-[500]">{item.name}</p>
            <div>

            </div>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-(--text-high) text-lg font-[600]">{item.price}</p>
              <p className="text-sm"><s>{item.discountPrice}</s></p>
            </div>
          </main>
        </Link>
      ))}
    </div>
  )
}