import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSessionUser } from "@/redux/reducer/session";

export default function useSession(){
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    email:"",
    password:""
  })
  const [loginRes, setLoginRes] = useState({
    event:false,
    error:false,
    code:"",
    message:""
  })
  const accounts = useSelector(state => state.accounts.accounts)

  useEffect(() => {
    function sessionUser(){
      try{
        const foundAccount = accounts.filter((item) => {
      	return item.email === userData.email && atob(item.password) === userData.password
        })

        // guard clause
        if(foundAccount.length < 1) throw new Error("Akun tidak ditemukan")
        
        dispatch(createSessionUser(foundAccount[0]))
        setLoginRes({
          event:true,
          error:false,
          code:"LOGIN_SUCCESS",
          message:"Sukses Login"
        })

      } catch(err){
        console.error(err)
        setLoginRes({
          event:true,
          error:true,
          code:"LOGIN_FAILED",
          message:err.message
        })
      }
    }
    sessionUser()
  },[userData, accounts, dispatch])

  return { loginRes, setUserData }
}