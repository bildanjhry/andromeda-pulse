import { Link } from "react-router";

import { FiShoppingCart } from "react-icons/fi";

export default function EmptyCart(){
  return(
    <div 
      className="w-full min-h-135 mt-5 rounded-xl border-light flex
    flex-col gap-3 justify-center items-center px-8">
      <FiShoppingCart size={70}/>
      <h2 className="font-medium text-2xl relative">Keranjang kamu kosong</h2>
      <Link 
        to={"/browse-product/all"}
        className="w-40 text-sm h-11 flex justify-center items-center rounded-xl bg-(--main-bg) 
			text-white relative">
				Mulai Belanja
      </Link>
    </div>		
  )
}