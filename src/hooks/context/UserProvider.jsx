import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({children}){
  const [globalCart, setGlobalCart] = useState([])

  return(
    <UserContext.Provider value={[globalCart, setGlobalCart]}>
      {children}
    </UserContext.Provider>
  )
}
