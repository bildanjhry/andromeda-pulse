import { useEffect, useState } from "react";

export default function useUser(key){
  const [user, setUser] = useState({})
  const [initial, setInitial] = useState("")
  const [cart, setCart] = useState([])
  const [checkout, setCheckout] = useState([])
  const [error, setError] = useState("")
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    function getUser(){
      const data = window.localStorage.getItem(key)
      if(data) {
        const newData = JSON.parse(data)
        setUser(newData)
        setInitial(newData.fullname.charAt(0).toUpperCase())
        setCart(newData.cart)
        setCheckout(newData.checkout)
        setWishlist(newData.wishlist)
      } else {
        setError("Item with key "+ key +" is Empty")
      }
    }
    getUser()
  },[key])
    
  return {user, setUser, initial, cart, wishlist, checkout, error}
}