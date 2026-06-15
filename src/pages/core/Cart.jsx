import MainLayout from "@/components/layouts/MainLayout";
import { useEffect, useState } from "react";

export default function Cart(){
  const [cart, setCart] = useState()

  useEffect(() => {
    function getCartUser(){
      const user = JSON.parse(window.localStorage.getItem("user"))
      setCart(user.cart)
    }
    getCartUser()
  },[])

  return(
    <MainLayout>
      <div className="w-[83%] my-5 flex flex-col">
        <h2 className="text-h">Keranjang Belanja ({cart?.length} item)</h2>
        <div className="w-full min-h-[309px] mt-4 flex flex-row justify-between">
          <main className="w-[66%] min-h-[100%] flex flex-col justify-between">
            <section className="w-full min-h-[145px] bg-white rounded-xl border-light">

            </section>
            <section className="w-full h-[145px] bg-white rounded-xl border-light">

            </section>
          </main>
          <aside className="w-[395px] min-h-[309px] bg-white border-light 
          p-5 rounded-xl flex flex-col">
            <h4 className="text-h font-[600]">Ringkasan Pesananan</h4>
            <div className="flex flex-col border-b-light mt-2 text-sm gap-2 py-2">
              <ul className="flex justify-between items-center">
                <li>Subtotal ({cart?.length} item)</li>
                <li>Rp 450.000</li>
              </ul>
              <ul className="flex justify-between items-center">
                <li>Ongkos Kirim</li>
                <li className="text-(--text-success)">GRATIS</li>
              </ul>              
            </div>
            <ul className="flex justify-between items-center py-2">
              <li className="text-h">Total</li>
              <li className="text-(--text-high)">Rp 450.000</li>
            </ul>
            <button 
              className="w-full cursor-pointer mt-2 h-[48px] rounded-xl flex justify-center items-center 
            bg-(--action-bg) text-(--text-light)">
              <p>Chekout Aman</p>
            </button>
            <div className="flex mt-3 flex-col items-center">
              <p className="text-xs">Pembayaran 100% Aman</p>

            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  )
}