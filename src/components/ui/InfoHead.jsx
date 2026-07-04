import { GoArrowRight } from "react-icons/go";
import { FaPlay } from "react-icons/fa";

export default function InfoHead(){
  return (
		<div className="w-full relative h-180 flex md:flex-row">
			<video 
			autoPlay
			muted
			playsInline
			loop
			className="w-full h-full object-cover object-center"
			src="/vids/venum-gloves.mp4">
			</video>
				<div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent h-full" >
				</div>
			<div className="absolute text-white bottom-30 left-20 flex flex-col gap-3 w-[30%]">
				<FaPlay className="mb-6 " size={30}/>
				<p className="text-5xl font-semibold">Venum Edisi Cyryl Gane</p>
				<p className="text-sm">Gloves dengan kualitas standar profesional baik untuk latihan intensif maupun ringan. Dengan teknologi terkini memberikan efek yang dirasakan oleh seorang juara.</p>
				<button 
				className="text-sm gap-2 mt-3 content-cent rounded-full bg-(--main-bg) h-10 w-30 px-2">
					<p>Jelajahi</p>
					<GoArrowRight className="text-(--action-bg)"/>
				</button>
			</div>
		</div>
	)
}