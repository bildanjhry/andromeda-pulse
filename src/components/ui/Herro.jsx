import { motion } from "framer-motion"

// asset
import ArrowRight from "@/assets/icons/arrow-right-blue.svg"
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import Gi from "../../../public/images/products/gi.png"

export default function Herro(){
  return(
    <header id="herro" className="h-screen 3xl:h-167 flex flex-row w-[95%] md:rounded-none rounded-2xl 
    md:w-full relative justify-center bg-linear-to-r from-white via-white/60 to-(--primary-bg)/50 ">
      <main className="pt-32 w-[95%] h-full md:w-[90%] flex">
        <section 
        className="flex h-full flex-row justify-between gap-3 w-[50%]">
          <ul className="flex flex-col h-full relative top-[20%] gap-4">
            <li>
              <button className="rounded-full font-semibold h-5 text-xs w-5 content-cent">
                  1
              </button>
            </li>
            <li>
              <button className="rounded-full font-semibold h-5 text-2xl w-5 content-cent">
                  2
              </button>
            </li>
            <li>
              <button className="rounded-full font-semibold h-5 text-xs w-5 content-cent">
                  3
              </button>
            </li>
          </ul>
          <div className="flex flex-col gap-3 mt-5 w-[80%]">
            <div className="flex flex-col gap-3">
              <p className="font-bold">RAGLAN</p>
              <p className="text-6xl my-4 font-semibold">Kaos Active Wear</p>
              <p className="w-[90%] text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci atque autem velit doloribus unde a laudantium ea alias culpa ad assumenda!</p>
            </div>
            <div className="mt-3 flex flex-col gap-2 mb-4 relative">
                <ul className="flex gap-3 px-4 py-3 h-12 absolute rounded-2xl items-center w-fit">
                  <li>
                    <button className="w-6 h-6 rounded-full bg-blue-900">
                    </button>
                  </li>
                  <li>
                    <button className="w-6 h-6 rounded-full bg-white">
                    </button>
                  </li>
                  <li>
                    <button className="w-6 h-6 rounded-full bg-black">
                    </button>
                  </li>
                </ul>
              <ul className="flex gap-3 h-12 pb-3 pt-4 bg-(--light-bg)/20 backdrop-blur-2xl px-4 z-2 
              rounded-full items-center w-fit">
                <li>
                  <button className="w-6 h-6 rounded-full bg-blue-900">
                  </button>
                </li>
                <li>
                  <button className="w-6 h-6 rounded-full bg-white">
                  </button>
                </li>
                <li>
                  <button className="w-6 h-6 rounded-full bg-black">
                  </button>
                </li>
              </ul>
          </div>
          <p className="font-extrabold text-3xl">Rp450.000</p>
          <div className="w-[60%] mt-2 flex justify-between h-26 gap-2">
            <button className="bg-(--main-bg) shadow-xl w-full h-[50%] rounded-full text-white content-cent text-sm">
                Beli Sekarang
            </button>
            <button className="text-(--action-bg) content-cent gap-1 text-sm rounded-full w-fit p-4 h-[50%]">
              <MdFavoriteBorder size={30}/>
            </button>
          </div>
          </div>

        </section>
        <section
        className="w-[50%] h-full overflow-hidden">
          <div className="h-full relative">
            <motion.div
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 1 }}
                transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              <div className="absolute h-fit right-32 w-30 -top-28 ">
                <p className="text-(--text-mute)/10 text-[13rem] font-extrabold tracking-wide right-0 rotate-90 ">
                  RAGLAN
                </p>
              </div>
            </motion.div>
            {/* <span className="absolute z-0  h-fit w-fit">
            <motion.div
              initial={{ opacity: 0, y: 800 }}
              animate={{ opacity: 1, y: 500 }}
                transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >
              <p className="absolute text-(--text-mute)/20
               text-[9rem] w-fit h-fit -left-20 font-extrabold rotate-90 bottom-0 ">
                NIKE
              </p>
            </motion.div>

            </span> */}
            <div class="absolute bottom-35 left-1/3 h-7 w-40 z-20 -translate-x-1/2 rounded-full bg-black/60 blur-md"></div>
            <img 
            className="h-140 -top-20 z-1 absolute"
            src="/images/products/raglan-comp.png" 
            alt="" />
          </div>
        </section>
      </main>
      <footer className="flex text-light w-50 h-20 bottom-0 right-0 bg-black rounded-tl-2xl absolute">
        <button 
        className="cursor-pointer w-[50%] h-full content-cent">
          <GoChevronLeft size={30}/>
        </button>
        <button 
        className="cursor-pointer w-[50%] h-full content-cent">
          <GoChevronRight size={30}/>
        </button>
      </footer>
    </header>
  )
}