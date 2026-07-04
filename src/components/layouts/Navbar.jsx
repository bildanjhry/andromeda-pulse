import { Link } from "react-router"
import classNames from "classnames"
import { useState, useEffect } from "react"

// hook
import useFetch from "@/hooks/useFetch.js"

// assets
import location from "@/assets/icons/location-white.svg"
import hamMenu from "@/assets/icons/ham-menu-black.svg"
import { CiSearch } from "react-icons/ci";

// component
import Logo from "@/components/ui/Logo"
import ProfileNavbar from "@/components/features/ProfileNavbar"

export default function Navbar() {
  const {data: categories} = useFetch("/data/categories.json")

  function handleSearch(e){
    e.preventDefault()
    try{
      const inputData = new FormData(e.target).get("search")
      if(inputData) window.location.herf = "/browse-product"
    } catch(err){
      console.error(err.message)
    }
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classNames(
      `flex flex-col w-full h-fit fixed top-0 justify-center 
      items-center bg-white/0 transition-all duration-300 ease-in-out`,
      {"bg-white/80 shadow-lg backdrop-blur-xl z-20 backdrop-saturate-150": scrolled === true }
      )}>
      <section className="w-full h-17 flex justify-center  items-center ">
        <div className="w-[95%] md:w-[90%] h-full large:w-315 flex gap-3 items-center 
				justify-self-center justify-between">
          <Logo />
          <ul className="w-full justify-start h-full gap-2 md:ml-6 md:gap-7 text-sm flex">
          {categories.map((item, index) =>(
            <li key={index} className="shrink-0">
              <Link to={""} className="md:px-0 px-4 flex gap-2 rounded-lg md:w-fit items-center h-full">
                <p className="text-h text-[13px] font-semibold">{item.name.toUpperCase()}</p>
              </Link>
            </li>
          ))}
          </ul>
          <div id="search" className="w-full md:w-[50%] ">
            <form id="search-input" 
              onSubmit={(e) => handleSearch(e)}
              action="" className="h-11 md:border md:border-(--border) md:h-10 flex w-full rounded-full">
              <input 
                id="search"
                type="search" 
                name="search"
                placeholder="Cari produk, merek, kategori..."
                className="rounded-l-lg h-full w-[90%]
                pl-4 text-sm"/>
              <button 
                type="submit"
                className=" flex justify-center items-center rounded-r-lg 
                h-full w-[20%] md:w-[15%] ">
                <CiSearch className="font-bold text-h text-xl"/>
              </button>
            </form>
          </div>
          

          <div className="hidden md:flex">
            <ProfileNavbar/>
          </div>

        </div>
      </section>
    </div>
  )
}