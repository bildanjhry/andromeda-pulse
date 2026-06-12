import Navbar from "./Navbar"
import Footer from "./Footer"

export default function MainLayout({children}){
  return(
    <div>
      <Navbar/>
      <main className="mt-[8rem] w-[90%] min-h-[100vh] md:w-[83%] justify-self-center flex-1">
        {children}
      </main>
      <Footer/>     
    </div>
  )
}