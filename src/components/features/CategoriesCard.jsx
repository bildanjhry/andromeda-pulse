import { Link } from "react-router"
import { useState, useEffect } from "react"

// component
import ArrowRightButton from "@/components/ui/ArrowLeftButton"

export default function CategoriesCard(){
  const [datas, setDatas] = useState([])
	
  useEffect(() => {
    async function getCategories(){
      const apiUrl = "/data/categories.json"
      const res = await fetch(apiUrl)
      const data = await res.json()

      console.log(data)
      setDatas(data)
    }

    getCategories()
		
  },[setDatas])

  return(
    <div className="w-full flex flex-col gap-3 mt-4 mb-12">
      <header className="flex justify-between w-full h-[5rem] items-center">
        <h3 className="font-[200]">Belanja Berdasarkan Kategori</h3>
        <ArrowRightButton/>
      </header>
      <main className="flex flex-row gap-3 flex-wrap w-full h-fit">
        {datas?.map((item, index) => (
          <Link 
            to={"/browse-product"}
            key={index}
            className="rounded-lg items-center pt-2 flex flex-col border-light gap-2 
						bg-(--container-bg) w-[198px] h-[138px] hover:-translate-y-3">
            <img 
              className="w-[56px] rounded-lg h-[56px]"
              src={item.image} alt="product" />
            <p className="text-h tex-sm leading-3 pt-3 text-sm ">{item.name}</p>
            <p className="text-sm">{item.total} Produk</p>
          </Link>
        ))}
      </main>
    </div>
  )
}