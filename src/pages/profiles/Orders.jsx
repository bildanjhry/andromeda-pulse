import { useEffect, useState } from "react";

// content
import ProfileLayout from "@/components/layouts/ProfileLayout";

export default function Orders(){
  const [checkout, setCheckout] = useState()
  useEffect(() => {
    function getUser(){
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(user) setCheckout(user.checkout)
      
    }
    getUser()
  
  },[])

  console.log(checkout)


  return(
    <ProfileLayout>
      <div className="w-[95%] pt-1 h-full">
        <h3>Pesanan Saya</h3>
        <div className="mt-6 w-full border-light bg-white rounded-2xl 
        py-4 px-5">
          <header className="flex w-full justify-between items-center">
            <div>
              <p className="text-h font-[600]">#822UD9W</p>
              <p className="text-xs">22 Jan 2020</p>
            </div>
            <div className="text-(--text-success) text-xs py-1 px-3 
            rounded-full bg-(--accent-bg)">
              Terkirim
            </div>
          </header>
          <main className="border-b-light py-5 flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <img 
                className="w-[48px] rounded-lg"
                src="/images/products/headphone-prod.svg" 
                alt="product image" 
              />
              <div className="flex justify-center gap-0 flex-col">
                <p className="text-h m-0">Headphone Wireless Premium</p>
                <p className="text-xs ">Rp 450.000</p>
              </div>
            </div>
          </main>
          <footer className="h-[3rem] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p>Total:</p>
              <p className="text-(--text-high)">Rp 450.000</p>
            </div>
          </footer>
        </div>
        <div className="mt-6 w-full border-light bg-white rounded-2xl 
        py-4 px-5">
          <header className="flex w-full justify-between items-center">
            <div>
              <p className="text-h font-[600]">#822UD9W</p>
              <p className="text-xs">22 Jan 2020</p>
            </div>
            <div className="text-(--text-success) text-xs py-1 px-3 
            rounded-full bg-(--accent-bg)">
              Terkirim
            </div>
          </header>
          <main className="border-b-light py-5 flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <img 
                className="w-[48px] rounded-lg"
                src="/images/products/headphone-prod.svg" 
                alt="product image" 
              />
              <div className="flex justify-center gap-0 flex-col">
                <p className="text-h m-0">Headphone Wireless Premium</p>
                <p className="text-xs ">Rp 450.000</p>
              </div>
            </div>
          </main>
          <footer className="h-[3rem] flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p>Total:</p>
              <p className="text-(--text-high)">Rp 450.000</p>
            </div>
          </footer>
        </div>
      </div>
    </ProfileLayout>
  )
}