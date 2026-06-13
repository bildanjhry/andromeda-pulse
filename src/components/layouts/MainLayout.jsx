import Navbar from "./Navbar"
import Footer from "./Footer"

export default function MainLayout({children}){
  return(
    <div>
      <Navbar/>
      <main className="mt-[8rem] w-full justify-self-center flex-1">
        {children}
      </main>
      <Footer/>     
    </div>
  )
}