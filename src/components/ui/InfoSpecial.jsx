import { IoIosArrowRoundForward } from "react-icons/io";

export default function InfoSpecial(){
  return (
		<div className="w-full h-150 rounded-3xl flex flex-col mt-5 bg-(--light-bg) relative shadow-md content-cent">
			<button className="w-32 h-11 shadow-md bg-(--main-bg) flex items-center gap-3 text-(--text-light) rounded-3xl content-cent">
				<p>Jelajahi</p>
				<IoIosArrowRoundForward 
				size={20}
				className="text-(--action-bg)"/>
			</button>
			<p className=" bg-clip-text bg-linear-to-r from-(--text-mute)/90 
			via-(--text-mute)/30 to-(--action-bg)/80 text-transparent text-[15rem] font-extrabold tracking-[2.5rem]">
				HYROX</p>
			<img 
			className="w-full h-full object-contain absolute z-3"
			src="/images/event/hirox.png" alt="" />
		</div>
	)
}