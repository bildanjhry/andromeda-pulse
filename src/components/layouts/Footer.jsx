// component
import Logo from "../ui/Logo"

//asset
import Delivery from "@/assets/icons/delivery-blue.svg"
import Safe from "@/assets/icons/safe-blue.svg"
import Return from "@/assets/icons/return.svg"
import Support from "@/assets/icons/support-blue.svg"
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";


export default function Footer() {
  return (
    <div className="w-full primary-bg h-123 flex mt-auto flex-col">
      <section className="w-full h-26.25 border-b-accent flex justify-center ">
        <ul className="w-[83%] flex justify-between large:w-315">
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={Delivery} alt="" />
            </div>
            <div className="text-light text-sm">
              <p>Gratis Ongkir</p>
              <p className="text-(--text-accent)">Pembelian diatas Rp 100.000</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={Safe} alt="" />
            </div>
            <div className="text-light text-sm">
              <p>Gratis Ongkir</p>
              <p className="text-(--text-accent)">Pembelian diatas Rp 100.000</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={Return} alt="" />
            </div>
            <div className="text-light text-sm">
              <p>Gratis Ongkir</p>
              <p className="text-(--text-accent)">Pembelian diatas Rp 100.000</p>
            </div>
          </li>
          <li className="flex gap-2 items-center">
            <div className="accent-bg rounded-full flex justify-center items-center h-[40px] w-[40px]">
              <img src={Support} alt="" />
            </div>
            <div className="text-light text-sm">
              <p>Gratis Ongkir</p>
              <p className="text-(--text-accent)">Pembelian diatas Rp 100.000</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="w-full h-84.5 border-b-accent flex justify-center">
        <ul className="flex w-[83%] large:w-315 gap-2 justify-between items-center">
          <li className="w-60 h-60.5 flex flex-col gap-5">
            <Logo scheme={"dark"}/>
            <p className="text-sm text-accent">Platform belanja online terpercaya dengan ribuan produk pilihan. Belanja mudah, 
              aman, dan menyenangkan.
            </p>
            <ul className="flex gap-3 items-center text-white text-[13px]">
              <li className="flex justify-center accent-bg items-center w-8 h-8 rounded-full">
                <LuFacebook/>
              </li>
              <li className="flex justify-center accent-bg items-center w-8 h-8 rounded-full">
                <LuInstagram/>
              </li>
              <li className="flex justify-center accent-bg items-center w-8 h-8 rounded-full">
                <LuTwitter/>
              </li>
              <li className="flex justify-center accent-bg items-center w-8 h-8 rounded-full">
                <LuYoutube/>
              </li>
            </ul>
          </li>
          <li className="w-60 accent-bg h-60.5">
            <div></div>
          </li>
          <li className="w-60 accent-bg h-60.5">
            <div></div>
          </li>
          <li className="w-60 accent-bg h-60.5">
            <div></div>
          </li>
        </ul>
      </section>
      <section></section>
    </div>
  )
}