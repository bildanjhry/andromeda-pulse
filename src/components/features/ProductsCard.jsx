import { Link } from "react-router"
import classNames from "classnames";
import moneyFormat from "@/utils/money-format.js"
import useFetch from "@/hooks/useFetch";
import useUser from "@/hooks/useUser";

// componets
import RenderStars from "@/components/ui/RenderStars";

//
import { LiaCartPlusSolid } from "react-icons/lia";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function Card({
  count = 4, 
  width = "LARGE",
  scroll ="SCROLL", params
}){
  
  let {data } = useFetch("/data/products.json", params)
  const { wishlist } = useUser()
  let products = data

  switch(params){
  case "FLASH_DEALS":
    products = data.filter((item) => item?.status)
      .filter((item) => item.status[0] === "flash deals")
    break;
  case "WISHLIST":
    products = wishlist
    break;
  case "NEW":
    products = data.filter((item) => item?.status)
      .filter((item) => item.status[0] === "Baru")
    break;
  default:
    products

  }

  return(
    <div className={classNames(
      `flex md:grid shrink-0 md:overflow-hidden pt-0 pb-10`,
      {"overflow-x-scroll md:overflow-hidden gap-3" : scroll === "SCROLL"},
      {"overflow-x-hidden md:overflow-x-hidden grid grid-cols-2 gap-1.5 justify-between" : scroll === "NO_SCROLL"},
      {'md:grid-cols-3 3xl:grid-cols-4 large:grid-cols-3' : count === 2},
      {'md:grid-cols-4 3xl:grid-cols-5 large:grid-cols-4': count === 4}
    )}>

      {products?.map((item, index) => (
        <Link
          key={item.id}
          to={`/details/${item.cat?.id}/${item.slugs}`} 
          className="bg-(--light-bg) relative  md:w-full rounded-4xl h-90 md:h-109 shrink-0 overflow-hidden shadow-md">
          <header className="w-full flex rounded-3xl items-center justify-center h-[66%] md:h-[68%] md:overflow-hidden relative">
            <img 
              className="h-[96%] w-[96%] bg-(--content-bg) rounded-3xl object-contain"
              src={item.image?.path} alt={item.image?.alt} />
            <div className={classNames(
              "absolute rounded-full text-sm py-0.5 top-3 left-4 z-1 px-2 text-white",
              {"bg-(--info-bg)" : item.discountPrice},
              {"bg-(--main-bg)" : !item.discountPrice && item.status[0] === "Baru"},
            )}>
              {item.discount || item.status[0]}
            </div>
          </header>
          
          <main className={classNames(
            {"pl-3 md:pl-3" : scroll === "NO_SCROLL"},
            {"md:pl-5 pl-3" : scroll === "SCROLL"},
            "flex flex-col gap-0 mt-3 relative",
          )}>
            <p className={classNames(
              {"text-[11px] md:text-[12px] pb-1": width === "SMALL"},
              "text-xs md:pb-0.5 text-(--text-mute)"
            )}>{item.brand}</p>
            <p className={classNames(
              "font-semibold text-(--text-mute) relative text-sm md:text-[16px]",
              {"text-[15px] md:text-[10px] pb-1.5 leading-4.5 w-[95%]": width === "SMALL"}
            )}>{item.name}</p>
            <div className="flex text-(--text-mute) items-center md:text-sm md:relative md:top-1 text-xs">
              <RenderStars rating={item.rating} width={width}/>
              <p className="pl-2">{item.rating}</p>
              <p className="pl-1">({item.ratingTotal})</p>
            </div>

            <div className={classNames(
              {"mt-1" : width === "SMALL"},
              {"mt-2" : width === "LARGE"},
              "flex flex-row gap-2 items-center",
            )}>
              <p className={classNames(
                " pt-1 text-sm md:text-xl font-bold",
                {"pt-0 md:text-[15px]": width === "SMALL"},
                {"text-xs pt-0 ": scroll === "NO_SCROLL"}
              )}>{moneyFormat(item?.price)[0]}</p>
              { item.discountPrice > 0 && 
              <p className={classNames(
                "md:text-xs text-xs relative top-px",
                {"text-[9px] md:text-sm" : width === "SMALL"}
              )}></p> }
            </div>
          </main>
            <button 
            className="right-2 bottom-33 content-cent shadow-md absolute rounded-2xl h-11 w-11 bg-(--light-bg)">
              <MdOutlineFavoriteBorder size={20} className="text-(--main-bg)"/>
            </button>
        </Link>
      ))}
    </div>
  )
}