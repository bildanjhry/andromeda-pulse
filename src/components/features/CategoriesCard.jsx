import { Link } from "react-router"

// component
import ArrowRightButton from "@/components/ui/ArrowLeftButton"

// custom hook
import useFetch from "@/hooks/useFetch"

export default function CategoriesCard(){
  const {data: categories} = useFetch("/data/categories.json")

  return(
    <div className="w-full flex flex-col gap-3 mt-4 mb-12">
      <header className="flex justify-between w-full h-20 items-center">
        <h3 className="">Belanja Berdasarkan Kategori</h3>
        <ArrowRightButton/>
      </header>

      <main className="flex flex-row gap-3 flex-wrap w-full h-fit">
        {categories?.filter((val) => val.status !== "navbar").map((item, index) => (
          <Link 
            to={"/browse-product"}
            key={index}
            className="rounded-lg items-center pt-2 flex flex-col border-light gap-2 
						bg-(--container-bg) w-49.5 h-34.5 hover:-translate-y-3">
            <img 
              className="w-14 rounded-lg h-14"
              src={item.image?.path} alt={item.image?.alt} />
            <p className="text-h tex-sm leading-3 pt-3 text-sm ">{item.name}</p>
            <p className="text-sm">{item.total} Produk</p>
          </Link>
        ))}
      </main>
    </div>
  )
}