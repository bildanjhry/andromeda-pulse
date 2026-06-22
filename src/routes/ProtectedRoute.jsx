import { useLocation, useNavigate } from "react-router";
import useUser from "@/hooks/useUser";

export default function ProtectedRoute({children}){
  const { user } = useUser()
  const location = useLocation()
  const navigate = useNavigate()

  if(!user?.id){
    navigate("/login", {state:{origin: location.pathname}})	
  }

  return children
}