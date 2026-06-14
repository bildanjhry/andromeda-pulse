// component
import ProfileLayout from "@/components/layouts/ProfileLayout.jsx";
import ProductsCard from "@/components/features/ProductsCard.jsx"

export default function Wishlist(){


  return(
    <ProfileLayout>
      <div className="w-[95%] pt-1 h-fit">
        <h3>Wishlist</h3>
        <div className="
        py-4 w-[80%]">
          <ProductsCard count={2}/>
      	</div>
	  </div>
    </ProfileLayout>
  )
}