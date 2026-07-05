import { CiDeliveryTruck } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { BsArrowReturnLeft } from "react-icons/bs";
import { AiOutlineWechatWork } from "react-icons/ai";

export default function Reason(){
  return(
    <div className="flex flex-col mt-17 gap-6 items-center text-center w-full">
      <p className="text-4xl font-semibold">Penawaran Kami Lainnya</p>
      <div className="gap-10 px-4 py-14 w-full grid grid-cols-2 md:grid-cols-4">

        <article className="flex flex-col gap-2 justify-center items-center">
          <div className="w-20 h-20 relative content-cent border-4 mb-3 border-(--action-bg)">
            <div className="absolute w-[70%] h-[108%] bg-(--base-bg)">
            </div>
            <div className="absolute w-[109%] h-[70%] bg-(--base-bg)">
            </div>
            <CiDeliveryTruck className="text-(--action-bg) z-2" size={45}/>
          </div>
          <p className="text-sm md:text-lg font-semibold text-h">Gratis Ongkir</p>
          <p className="text-xs md:text-sm">Pembelian di atas Rp 100.000 gratis ongkir keseluruh Indonesia</p>
        </article>

        <article className="flex flex-col gap-2 justify-center items-center">
          <div className="w-20 h-20 relative content-cent border-4 mb-3 border-(--action-bg)">
            <div className="absolute w-[70%] h-[108%] bg-(--base-bg)">
            </div>
            <div className="absolute w-[108%] h-[70%] bg-(--base-bg)">
            </div>
            <CiLock className="text-(--action-bg) z-2" size={45}/>
          </div>
          <p className="text-sm md:text-lg font-semibold text-h">Pembayaran Aman</p>
          <p className="text-xs md:text-sm">Data kamu terenkripsi dengan standar keamanan tertinggi</p>
        </article>
        
        <article className="flex flex-col gap-2 justify-center items-center">
          <div className="w-20 h-20 relative content-cent border-4 mb-3 border-(--action-bg)">
            <div className="absolute w-[70%] h-[109%] bg-(--base-bg)">
            </div>
            <div className="absolute w-[108%] h-[70%] bg-(--base-bg)">
            </div>
            <BsArrowReturnLeft className="text-(--action-bg) z-2" size={40}/>
          </div>
          <p className="text-sm md:text-lg font-semibold text-h">Retur Mudah</p>
          <p className="text-xs md:text-sm">Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet</p>
        </article>

        <article className="flex flex-col gap-2 justify-center items-center">
          <div className="w-20 h-20 relative content-cent border-4 mb-3 border-(--action-bg)">
            <div className="absolute w-[70%] h-[108%] bg-(--base-bg)">
            </div>
            <div className="absolute w-[109%] h-[70%] bg-(--base-bg)">
            </div>
            <AiOutlineWechatWork className="text-(--action-bg) z-2" size={45}/>
          </div>
          <p className="text-sm md:text-lg font-semibold text-h">CS 24/7</p>
          <p className="text-xs md:text-sm">Tim kami siap membantu kamu kapan saja</p>
        </article>												
      </div>
    </div>
  )
}