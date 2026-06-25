// component
import InfoSection from "./particles/InfoSection.jsx"
import FormSection from "./particles/FormSection.jsx"

export default function AuthLayout({type}){
  return(
    <div className="w-full h-screen flex flex-row justify-center">
      <section className="md:flex hidden w-[50%]">
        <InfoSection type={type}/>
      </section>
      
      <section className="w-full md:w-[50%] flex justify-center container-bg items-center">
        <FormSection type={type}/>
      </section>
    </div>
  )
}
