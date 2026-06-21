import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect } from "react"

export default function MainLayout({children}){

  useEffect(() => {
    window.scrollTo({top:0})
  },[])

  return(
    <div className="">
      <Navbar/>
      <main className="mt-32 w-full flex justify-center 
      large:w-380 large:justify-self-center min-h-screen flex-1">
        {children}
      </main>
      <Footer/>     
    </div>
  )
}