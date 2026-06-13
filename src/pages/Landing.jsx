// component
import MainLayout from "@/components/layouts/MainLayout"
import Herro from "@/components/ui/Herro"
import CategoriesCard from "../components/features/CategoriesCard"


export default function Landing(){
  return (
    <MainLayout>
      <div className="w-full flex flex-col items-center">
        <Herro/>
        <div className="w-[83%] flex flex-col justify-center items-center ">
          <CategoriesCard/>
        </div>
      </div>
    </MainLayout>
  )
}