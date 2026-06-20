import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "@/hooks/context/UserContext";

export default function useUser(){

  // lazy init
  const [user, setUser] = useState(() => {
    return JSON.parse(window.localStorage.getItem("user")) || {}
  })
  const [accounts, setAccouts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("accounts")) || []
  })

  const [initial, setInitial] = useState("")
  const [cart, setCart] = useState(user.cart || [])
  const [checkout, setCheckout] = useState(user.checkout || [])
  const [error, setError] = useState("")
  const [wishlist, setWishlist] = useState([])
  const [userName, setUserName] = useState("")
  const [ , setGlobalCart] = useContext(UserContext)

  useEffect(() => {
    function getUser(){
      try{
        setInitial(user?.fullname?.charAt(0)?.toUpperCase())
        setUserName(user?.fullname?.split(" ")[0])
        setWishlist(user?.wishlist)
        setGlobalCart(user?.cart)
      } catch(err){
        console.error(err.message)
      }
    }

    getUser()
  },[user, setGlobalCart])

  function setterAccounts(data) {
    setAccouts(prev => {
      const prevAcc = [...prev]
      prevAcc.push(data)
      window.localStorage.setItem("accounts", JSON.stringify(prevAcc))
      return prevAcc
    })
  }

  function setterCart(data){
    setCart(prev => {
      setUser({...user, cart:[...prev, data]}) // update user's data
      return [...prev, data]
    })
  }
  
  useEffect(() => {
    function updateUser(){
      const rest = accounts.filter((item) => item.id !== user.id)
      // updating accounts
      window.localStorage.setItem("accounts", JSON.stringify([...rest, {...user, cart}]))
      window.localStorage.setItem("user", JSON.stringify({...user, cart}))
    }
    updateUser()
  },[user, accounts, cart])

  function setterUser(data) {
    setUser(data)
    window.localStorage.setItem("user", JSON.stringify(data))
  }
  
  return {
    user, 
    accounts, 
    setterAccounts,
    setterUser, 
    setterCart,
    userName, 
    initial, 
    cart, 
    wishlist, 
    checkout, 
    error
  }

}