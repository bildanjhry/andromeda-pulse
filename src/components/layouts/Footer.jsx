// component
import Logo from "../ui/Logo"

export default function Footer() {
  return (
    <div className="w-full primary-bg h-[492px] flex mt-auto flex-col">
      <section className="w-full h-[105px] border-b-accent flex justify-center ">
        <ul className="w-[83%] flex justify-between">
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={null} alt="" />
            </div>
            <div className="">
              <p>Title</p>
              <p>Contoh</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={null} alt="" />
            </div>
            <div className="">
              <p>Title</p>
              <p>Contoh</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={null} alt="" />
            </div>
            <div className="">
              <p>Title</p>
              <p>Contoh</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={null} alt="" />
            </div>
            <div className="">
              <p>Title</p>
              <p>Contoh</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="w-full h-[338px] border-b-accent flex justify-center">
        <ul className="flex w-[83%] gap-2 justify-between items-center">
          <li className="w-[15rem] h-[242px] accent-bg flex flex-col gap-4">
            <Logo scheme={"dark"}/>
            <p className="text-xs text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit incidunt 
              facilis quis ipsa deserunt soluta repellendus? Minus amet ad odio!
            </p>
            <ul className="flex gap-2 items-center">
              <li className="flex justify-center accent-bg items-center w-[32px] h-[32px] rounded-full">
                <img src={null} alt="" />
              </li>
              <li className="flex justify-center accent-bg items-center w-[32px] h-[32px] rounded-full">
                <img src={null} alt="" />
              </li>
              <li className="flex justify-center accent-bg items-center w-[32px] h-[32px] rounded-full">
                <img src={null} alt="" />
              </li>
              <li className="flex justify-center accent-bg items-center w-[32px] h-[32px] rounded-full">
                <img src={null} alt="" />
              </li>
            </ul>
          </li>
          <li className="w-[15rem] accent-bg h-[242px]">
            <div></div>
          </li>
          <li className="w-[15rem] accent-bg h-[242px]">
            <div></div>
          </li>
          <li className="w-[15rem] accent-bg h-[242px]">
            <div></div>
          </li>
        </ul>
      </section>
      <section></section>
    </div>
  )
}