import { Link } from "react-router"

export default function InfoCards(){
  return(
    <div className="w-full grid grid-cols-2 mb-10 gap-3 justify-between text-light">
      <section className="flex flex-col justify-center pl-6 h-[176px] rounded-xl bg-[black]">
        <div className="flex flex-col gap-1 h-fit">
          <p className="text-sm">Fashion Wanita</p>
          <h3 className="text-light">Diskon s/d 50%</h3>
          <Link
            to={"/browse-product/all"}
            className="rounded-md flex justify-center text-sm items-center w-[141px] h-[30px] border"
          >
            <p>Belanja Sekarang</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-col justify-center pl-6 h-[176px] rounded-xl bg-[wheat]">
        <div className="flex flex-col gap-1 h-fit">
          <p className="text-sm">Elektronik Pilihan</p>
          <h3 className="text-light">Harga Terbaik</h3>
          <Link
            to={"/browse-product/all"}
            className="rounded-md flex justify-center text-sm items-center w-[141px] h-[30px] border"
          >
            <p>Lihat Produk</p>
          </Link>
        </div>
      </section>
    </div>
  )
}