import { useEffect, useState } from "react";

//hook
import useMediaQuery from "@/hooks/useMediaQuery";

// component
import MainLayout from "@/components/layouts/MainLayout";
import Content from "./particles/Content";
import MobileContent from "./particles/MobileContent"

export default function ProfileLayout(){
  const width = useMediaQuery("(max-width:768px)")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function getWidthScreen(){
      setIsMobile(width)
    }
    getWidthScreen()
  },[width])

  return isMobile ? 
    ( <MobileContent/> )
    :  
    ( 
      <MainLayout>
        <Content/>
      </MainLayout>
    )
  
}
