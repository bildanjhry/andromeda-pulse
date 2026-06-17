import { useEffect, useState } from "react";
import getDashboardMenu from "@/services/get-dashboard-menu";

export default function useDashboardMenu(){
  const [menu, setMenu] = useState([])

  useEffect(() => {
    async function getData(){
      const data = await getDashboardMenu()
      setMenu(data)
    }
    getData()
  },[setMenu])

	 return[menu, setMenu]
}