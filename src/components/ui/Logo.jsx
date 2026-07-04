import classNames from "classnames"
import { Link } from "react-router"
import LogoImage from "@/assets/logo.png"

export default function Logo({scheme}) {
  return(
    <div id="logo" className=" h-fit flex items-center w-fit">
      <Link to={"/"} className="flex gap-2 items-center h-fit w-full">
        <div className="w-17 h-17 text-light flex justify-center 
        items-center">
					<img src={LogoImage} 
          className="rounded-lg"
          alt="Andromeda pulse" srcset="" />
        </div>
        <p className={classNames(
          'text-sm hidden md:visible',
          {'text-light' : scheme == "dark:"},
          {'text-h' : scheme !== "dark"}
        )}>BeliMudah</p>
      </Link>
    </div>       
  )
}