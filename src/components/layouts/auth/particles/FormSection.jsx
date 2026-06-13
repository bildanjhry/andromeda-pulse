import { Link } from "react-router"

// component
import AuthButton from "@/components/ui/AuthButton.jsx"
import SubmitButton from "@/components/ui/SubmitButton.jsx"

// asset
import Email from "@/assets/icons/email-mute.svg"
import Password from "@/assets/icons/password-mute.svg"
import Inside from "@/assets/icons/inside-white.svg"

export default function FormSection({type}){
  function chooseForm(){
    switch(type){
    case "login":
      return FormLogin()
    case "register" :
      return FormRegister()
    case "forgot-pass" :
      return FormForgotPass()
    default :
      return FormLogin()	
    }
  }

  return(
    <>
      { chooseForm() }
    </>
  )
}

function FormLogin(){
  function handleSubmit(e){
    e.preventDefault()

    try{
      const data = new FormData(e.target)

    } catch({message}){
      // handling if error happend
      console.log(message)
    }
  }

  return (
    <form
      className="w-[55%] flex flex-col gap-3"
      onSubmit={(e) => {handleSubmit(e)}} 
      action="">
      <h1>Masuk ke Akun</h1>
      <p className="relative bottom-5">Belum punya akun?
        <Link to={"/register"} className="text-[blue]"> Daftar gratis</Link>
      </p>
      <div className="flex justify-between">
        <AuthButton buttonText={"Google"} />
        <AuthButton buttonText={"Faceboook"} />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-500">
            atau masuk dengan email
        </span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-h">Email</label>
          <div className="relative">
            <img className="absolute p-4" src={Email} alt="" />
            <input 
              className="w-full h-[46px] text-sm pl-12 border-light input-bg rounded-xl"
              placeholder="email@contoh.com"
              type="email" name="email" id="email" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-h">Kata sandi</label>
            <Link className="text-sm" to={"/forgot-pass"}>Lupa kata sandi?</Link>
          </div>
          <div className="relative">
            <img className="absolute p-4" src={Password} alt="" />
            <input 
              className="w-full h-[46px] text-sm px-12 border-light input-bg rounded-xl"
              placeholder="Masukan kata sandi"
              type="password" name="password" id="password" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember-me" id="remember-me" value={"remember-me"}/>
          <label htmlFor="remember-me" className="cursor-pointer">Ingatkan saya dalam 30 hari</label>
        </div>
        <SubmitButton img={Inside} buttonText={"Masuk"}/>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <p className="text-center text-sm">🔒 Login aman dengan enkripsi SSL 256-bit</p>
          <p className="text-center text-sm flex w-[85%]">Dengan masuk, kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.</p>            
        </div>
      </div>
    </form>		
  )
}

function FormRegister(){
  function handleSubmit(e){
    e.preventDefault()

    try{
      const data = new FormData(e.target)

    } catch({message}){
      // handling if error happend
      console.log(message)
    }
  }

  return (
    <form
      className="w-[55%] flex flex-col gap-3"
      onSubmit={(e) => {handleSubmit(e)}} 
      action="">
      <h1>Masuk ke Akun</h1>
      <p className="relative bottom-5">Belum punya akun?
        <Link to={"/register"} className="text-[blue]"> Daftar gratis</Link>
      </p>
      <div className="flex justify-between">
        <AuthButton buttonText={"Google"} />
        <AuthButton buttonText={"Faceboook"} />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-500">
            atau masuk dengan email
        </span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-h">Email</label>
          <div className="relative">
            <img className="absolute p-4" src={Email} alt="" />
            <input 
              className="w-full h-[46px] text-sm pl-12 border-light input-bg rounded-xl"
              placeholder="email@contoh.com"
              type="email" name="email" id="email" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-h">Kata sandi</label>
            <Link className="text-sm" to={"/forgot-pass"}>Lupa kata sandi?</Link>
          </div>
          <div className="relative">
            <img className="absolute p-4" src={Password} alt="" />
            <input 
              className="w-full h-[46px] text-sm px-12 border-light input-bg rounded-xl"
              placeholder="Masukan kata sandi"
              type="password" name="password" id="password" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember-me" id="remember-me" value={"remember-me"}/>
          <label htmlFor="remember-me" className="cursor-pointer">Ingatkan saya dalam 30 hari</label>
        </div>
        <SubmitButton img={Inside} buttonText={"Daftar Sekarang"} order={"right-to-left"}/>
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <p className="text-center text-sm">🔒 Login aman dengan enkripsi SSL 256-bit</p>
          <p className="text-center text-sm flex w-[85%]">Dengan masuk, kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.</p>            
        </div>
      </div>
    </form>		
  )
}

function FormForgotPass(){
  function handleSubmit(e){
    e.preventDefault()

    try{
      const data = new FormData(e.target)

    } catch({message}){
      // handling if error happend
      console.log(message)
    }
  }

  return (
    <form
      className="w-[55%] flex flex-col gap-3"
      onSubmit={(e) => {handleSubmit(e)}} 
      action="">
      <h1>Masuk ke Akun</h1>
      <p className="relative bottom-5">Belum punya akun?
        <Link to={"/register"} className="text-[blue]"> Daftar gratis</Link>
      </p>
      <div className="flex justify-between">
        <AuthButton buttonText={"Google"} />
        <AuthButton buttonText={"Faceboook"} />
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-500">
            atau masuk dengan email
        </span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-h">Email</label>
          <div className="relative">
            <img className="absolute p-4" src={Email} alt="" />
            <input 
              className="w-full h-[46px] text-sm pl-12 border-light input-bg rounded-xl"
              placeholder="email@contoh.com"
              type="email" name="email" id="email" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-h">Kata sandi</label>
            <Link className="text-sm" to={"/forgot-pass"}>Lupa kata sandi?</Link>
          </div>
          <div className="relative">
            <img className="absolute p-4" src={Password} alt="" />
            <input 
              className="w-full h-[46px] text-sm px-12 border-light input-bg rounded-xl"
              placeholder="Masukan kata sandi"
              type="password" name="password" id="password" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="remember-me" id="remember-me" value={"remember-me"}/>
          <label htmlFor="remember-me" className="cursor-pointer">Ingatkan saya dalam 30 hari</label>
        </div>
        <SubmitButton img={Inside} buttonText={"Kirim Tautan Reset"} />
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <p className="text-center text-sm">🔒 Login aman dengan enkripsi SSL 256-bit</p>
          <p className="text-center text-sm flex w-[85%]">Dengan masuk, kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.</p>            
        </div>
      </div>
    </form>		
  )
}