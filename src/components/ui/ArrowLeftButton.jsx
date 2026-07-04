import { Link } from "react-router"

// asset
import ArrowRight from "@/assets/icons/arrow-right-blue.svg"
import { GoArrowRight } from "react-icons/go";

export default function ArrowRightButton(){
  return(
    <>
      <Link 
        className="flex gap-2"
        to={"/browse-product/all"}>
        <p className="text-sm text-(--text) hidden md:flex items-center">Lihat Semua</p>
        <GoArrowRight className="relative top-0.5"/>
      </Link>
    </>
  )
}