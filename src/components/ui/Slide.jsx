import { motion } from "framer-motion"
import Logo from "@/assets/logo.png"
import Venum from "@/assets/venum.webp"

const logos = [Venum, Venum, Venum, Venum, Venum, Venum, ]

export default function Slide(){
  return (
		<div className="w-full h-10 py-2 border border-(--main-bg) gap-0 flex overflow-hidden">
			<div
				className="flex w-full pr-[4.5em] justify-between shrink-0 marquee h-full items-center "
			>
				{[...logos, ...logos].map((logo, index) => (
					<img
						key={index}
						src={logo}
						className="h-6 w-auto"
					/>
				))}
			</div>
			<div
				aria-hidden
				className="flex w-full pr-[4.5em] justify-between shrink-0 marquee h-full items-center"
			>
				{[...logos, ...logos].map((logo, index) => (
					<img
						key={index}
						src={logo}
						className="h-6 w-auto "
					/>
				))}
			</div>
		</div>
	)
}