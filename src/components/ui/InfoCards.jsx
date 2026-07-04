import { Link } from "react-router"
import FashionSale from "@/assets/bg/fashion-sale.png"
import ElectronicsSale from "@/assets/bg/electronics-sale.png"
import { FiShoppingCart } from "react-icons/fi";

export default function InfoCards(){
  return(
    <div className="w-full grid grid-cols-5 gap-3 mt-5">
      <section className="col-span-3 flex justify-center relative bg-(--light-bg) h-80 overflow-hidden rounded-3xl">
        <div className="w-30 h-30 absolute left-30 top-15 rounded-full bg-(--action-bg)">

        </div>
        <img 
        className="h-full  object-contain z-1"
        src="/images/event/gear.png" alt="" />
        <div className="flex flex-col gap-2  pl-7 w-[40%] h-full justify-center">
          <p className="text-5xl font-semibold">Persiapan Tempur</p>
          <p className="leading-5 w-[90%] text-sm">Pelajari peralatan yang membuat kamu lebih siap dan percaya diri</p>
          <button
          className="rounded-xl flex mt-5 shadow-md text-sm bg-(--light-bg) h-13 content-cent w-50 "
          > <div className="w-[70%] pl-4 flex flex-col justify-center text-start h-full">
              <p className="text-xs text-(--text-mute)">Belanja</p>
              <p className="">Semua Produk</p>
           </div>
           <div className="content-cent w-[30%] border-l h-full border-(--border)">
              <FiShoppingCart/>
           </div>
          </button>
        </div>
      </section>
      <section className="col-span-2 flex flex-col items-center relative 
      overflow-hidden z-0 h-80 rounded-3xl">
        <div className="bg-linear-to-t from-black/50 via-black/50 to-black/50 absolute inset-0 h-full w-full">

        </div>
        <img 
        className="h-full w-full object-center absolute -z-1"
        src="/images/event/man-run.jpg" alt="" />
        <div className="text-(--text-light) z-1 flex flex-col items-center text-center h-full justify-center pt-10 gap-1">
          <p className="font-semibold text-xl">Isolasi Total</p>
          <p className="text-sm text-(--text-accent) w-[80%]">Pelajari hal yang dapat membantumu lebih fokus</p>
          <button
          className="rounded-full mt-3 text-sm border border-white content-cent px-5 py-2"
          >Jelajahi</button>
        </div>
      </section>
      <section className="cols-span-1 h-80 bg-(--main-bg) rounded-3xl">

      </section>
      <section className="col-span-4 bg-(--light-bg) h-80 rounded-3xl">

      </section>
    </div>
  )
}