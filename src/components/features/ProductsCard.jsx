import { Link } from "react-router"
import classNames from "classnames";
import moneyFormat from "@/utils/money-format.js"
import useFetch from "@/hooks/useFetch";
import useUser from "@/hooks/useUser";

// componets
import RenderStars from "@/components/ui/RenderStars";

export default function Card({count = 4, width = "large", params}){
  let {data } = useFetch("/data/products.json", params)
  const { wishlist } = useUser()
  let products = data

  switch(params){
  case "FLASH_DEALS":
    products = data.filter((item) => item?.status).filter((item) => item.status[0] === "flash deals")
    break;
  case "WISHLIST":
    products = wishlist
    break;
  case "NEW":
    products = data.filter((item) => item?.status).filter((item) => item.status[0] === "Baru")
    break;
  default:
    products

  }

  return(
    <div className={classNames(
      `grid gap-3`,
      {'grid-cols-3 3xl:grid-cols-4 large:grid-cols-3' : count === 2},
      {'grid-cols-4 3xl:grid-cols-5 large:grid-cols-4': count === 4}
    )}>

      {products?.map((item, index) => (
        <Link
          key={index}
          to={`/details/${item.cat?.id}/${item.slugs}`} 
          className="bg-(--container-bg) border-light rounded-xl h-105 overflow-hidden">
          <header className="w-full h-[70%] overflow-hidden relative">
            <img 
              className="h-full w-full object-cover relative"
              src={item.image?.path} alt={item.image?.alt} />
            <div className={classNames(
              "absolute rounded-full text-sm py-0.5 top-2 left-2 z-1 px-2 text-white",
              {"bg-(--info-bg)" : item.discountPrice},
              {"bg-(--main-bg)" : !item.discountPrice && item.status[0] === "Baru"},
            )}>
              {item.discount || item.status[0]}
            </div>
          </header>
          <main className="flex flex-col pl-5 gap-0 mt-3  ">
            <p className={classNames(
              {"text-xs": width === "small"},
              "text-xs pb-0.75"
            )}>{item.brand}</p>
            <p className={classNames(
              "text-h font-medium pb-1",
              {"text-[14px] pb-1": width === "small"}
            )}>{item.name}</p>
            <div className="flex items-center text-sm">
              <RenderStars rating={item.rating} width={width}/>
              <p className="pl-2">{item.rating}</p>
              <p className="pl-1">({item.ratingTotal})</p>
            </div>
            <div className="flex flex-row gap-2 mt-2 items-center">
              <p className="text-(--text-high) text-lg font-semibold">{moneyFormat(item?.price)[0]}</p>
              { item.discountPrice > 0 && <p className="text-xs relative top-px"><s>{moneyFormat(item?.discountPrice)[0]}</s></p> }
            </div>
          </main>
        </Link>
      ))}
    </div>
  )
}