import { Link } from "react-router"
import FashionSale from "@/assets/bg/fashion-sale.png"
import ElectronicsSale from "@/assets/bg/electronics-sale.png"
import { FiShoppingCart } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { SiNike } from "react-icons/si";

export default function InfoCards(){
  return(
    <div className="w-full grid grid-cols-5 gap-3 mt-3">
      <section className="col-span-3 flex justify-center relative bg-(--light-bg) 
      h-80 overflow-hidden rounded-3xl shadow-md">
        <div className="w-30 h-30 absolute left-30 top-15 rounded-full bg-(--action-bg)">

        </div>
        <img 
        className="h-full  object-contain z-1"
        src="/images/event/gear.png" alt="" />
        <div className="flex flex-col gap-2  pl-7 w-[40%] h-full justify-center">
          <p className="text-5xl font-semibold">Persiapan Tempur</p>
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

      <section className="col-span-2 flex flex-col items-center justify-center relative 
      overflow-hidden z-0 h-80 rounded-3xl bg-(--light-bg) shadow-md">
        <img 
        className="h-full w-full object-cover absolute -z-1 "
        src="/images/event/fashion-nocta-Photoroom.png" alt="" />
        <div className="absolute h-fit bg-(--light-bg) rounded-3xl overflow-hidden">
          <div className="bg-(--primary-bg) rounded-full left-6 bottom-0 h-35 w-35 absolute inset-0">

          </div>
          <div className="bg-(--action-bg) rounded-full left-30 top-25 h-35 w-35 absolute inset-0">

          </div>
          <div className="text-white z-1 flex flex-col rounded-3xl py-6 px-6
          bg-white/20 backdrop-blur-2xl backdrop-saturate-150 w-95 min-h-40 relative text-center 
          justify-center pt-5 gap-1">
            <p className="font-semibold text-3xl w-[80%] text-left">Fashion Sport Sudah Tiba.</p>
          <button
          className="rounded-xl flex mt-5 relative shadow-md text-sm text-(--text-h) 
          bg-(--light-bg) h-13 content-cent w-50 "
          > <div className="w-[70%] pl-4 flex flex-col justify-center text-start h-full">
              <p className="text-xs text-(--text-mute)">Belanja</p>
              <p className="">Semua Produk</p>
           </div>
           <div className="content-cent w-[30%] border-l h-full border-(--border)">
              <FiShoppingCart/>
           </div>
          </button>
          </div>
        </div>
      </section>

      <section className="col-span-2 h-80 bg-(--light-bg) content-cent shadow-md 
      rounded-3xl overflow-hidden relative z-0">
        <div className="w-[50%] absolute text-(--text-light) z-1 h-full content-cent">
          <div className="h-8 w-fit backdrop-blur-2xl rounded-md px-2 relative left-4 flex items-center gap-2.5 mt-20">
            <div className="h-[50%] gap-1 flex items-center content-cent border-r border-(--text-ligth) ">
              <FaApple size={23}/>
              <p className="top-20 text-lg font-semibold pr-3">WATCH</p>
            </div>
            <SiNike size={30}/>
            <p className="text-sm">Series 3</p>
          </div>
        </div>
        <img src="/images/event/smart-watch-woman.png" className="h-full w-full object-cover absolute z-0" alt="" />

          <div className="text-white absolute left-1 top-2 z-1 flex flex-col rounded-3xl p-2
          bg-white/20 backdrop-blur-2xl backdrop-saturate-150 w-fit h-fit text-center 
          justify-center gap-1 items-center">
          <button
          className="flex relative text-sm text-(--text-h) 
           h-6 content-cent w-40 "
          > 
          <div className="content-cent w-[30%] h-full border-(--border)">
              <div className="w-4 h-4 rounded-full absolute animate-ping bg-(--action-bg)">

              </div>
              <div className="w-4 h-4 rounded-full bg-(--action-bg)">

              </div>
          </div>
          <div className="w-[70%] pl-4 flex flex-col justify-center text-start h-full">
              <p className="">Unggulan</p>
           </div>
          </button>
          </div>

      </section>
      
      <section className="col-span-3 flex justify-between 
       bg-(--light-bg) h-80 rounded-3xl overflow-hidden shadow-md">
        <div className="w-[50%] flex pl-15 flex-col justify-center">
          <p className="text-5xl font-semibold">Isolasi Total</p>
          <p className="text-(--text-mute)">Lebih fokus. Lebih maksimal</p>
          <button
          className="rounded-xl flex mt-6 relative shadow-md text-sm text-(--text-h) 
          bg-(--light-bg) h-13 content-cent w-50 "
          > <div className="w-[70%] pl-4 flex flex-col justify-center text-start h-full">
              <p className="text-xs text-(--text-mute)">Belanja</p>
              <p className="">Semua Produk</p>
           </div>
           <div className="content-cent w-[30%] border-l h-full border-(--border)">
              <FiShoppingCart/>
           </div>
          </button>
        </div>
        <img 
        className="w-[50%] object-cover h-full"
        src="/images/event/headphone.png" alt="" />
      </section>
    </div>
  )
}