import { Link } from "react-router"

export default function AuthNavbar(){
  return(
    <div className="w-fit flex items-center gap-2 justify-between">
      <Link 
        className="w-25 h-9 text-sm rounded-xl flex justify-center items-center
		text-white bg-(--main-bg)"
        to={"/login"}>
			Login
      </Link>
      <Link 
        className="w-25 h-9 text-sm rounded-xl flex justify-center items-center
		border-2 border-(--border)"
        to={"/register"}>
			Register
      </Link>
    </div>
  )
}