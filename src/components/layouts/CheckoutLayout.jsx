// component
import MainLayout from "@/components/layouts/MainLayout.jsx"
import { Outlet } from "react-router"

export default function CheckoutLayout(){
  return(
    <MainLayout>
      <div className="w-[83%] min-h-40 mt-5 mb-15 flex flex-col gap-4 items-center">
        <Header/>
        <main className="w-full box-border mt-4 flex flex-row justify-between 
				 min-h-[271px] relative">
          <div className="w-[70%] flex flex-col py-10 px-10 bg-white rounded-2xl border-light">
            <Outlet/>
          </div>
          <Aside/>
        </main>
      </div>
    </MainLayout>
  )
}

function Header() {
  return(
    <header className="flex items-center gap-2 h-30">
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-(--main-bg) 
				text-white">
          <p>1</p>
        </div>
        <p className="text-(--text-high) text-xs">Pengiriman</p>
      </div>
      <span className="w-37 border border-slate-300 relative bottom-3"></span>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full text-sm flex justify-center items-center 
				bg-(--content-deep-bg)">
          <p>2</p>
        </div>
        <p className=" text-xs">Pembayaran</p>
      </div>
      <span className="w-37 border border-slate-300 relative bottom-3"></span>
      <div className="flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full text-sm flex justify-center items-center 
				bg-(--content-deep-bg)">
          <p>3</p>
        </div>
        <p className=" text-xs">Konfirmasi</p>
      </div>
    </header>		
  )
}

function Aside(){
  return (
    <aside className="w-[352px] min-h-[271px] max-h-fit sticky top-35 border-light bg-white 
      flex flex-col px-6 py-5 rounded-2xl gap-2">
      <h4>Rinkasan Pesanan</h4>
      <div className="py-3 flex flex-col gap-2 border-b-light">
        <div className="flex justify-between">
          <img
            className="w-10 h-10 rounded-xl" 
            src={null} alt="product image" />
          <div className="flex w-[72%] justify-between items-center text-xs">
            <p>Headphone Wireless Premium</p>
            <p>x1</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 py-3  border-b-light">
        <ul className="flex justify-between items-center">
          <li>Subtotal</li>
          <li>Rp 450.000</li>
        </ul>
        <ul className="flex justify-between items-center">
          <li>Ongkir</li>
          <li className="text-(--text-success)">Gratis</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between items-center mb-5">
          <li className="text-(--text-h)">Total</li>
          <li className="text-(--text-high) font-semibold">Rp 450.000</li>
        </ul>
        <p className="text-center relative  text-xs">🔒 Pembayaran aman dan terenkripsi</p>
      </div>
    </aside>
  )
}