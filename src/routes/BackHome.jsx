import { useLocation, useNavigate } from "react-router";
import useUser from "@/hooks/useUser";

export default function BackHome({children}){
  const { user } = useUser()
  const location = useLocation()
  const navigate = useNavigate()

  if(!user?.id){
    navigate("/", {state:{origin: location.pathname}})	
  }
  return children
}