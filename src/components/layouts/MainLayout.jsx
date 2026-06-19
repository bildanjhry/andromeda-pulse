import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect } from "react"

export default function MainLayout({children}){

  useEffect(() => {
    window.scrollTo({top:0})
  },[])

  return(
    <div>
      <Navbar/>
      <main className="mt-[8rem] w-full flex justify-center items-center flex-1">
        {children}
      </main>
      <Footer/>     
    </div>
  )
}