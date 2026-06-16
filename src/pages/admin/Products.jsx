// component
import DashboardLayout from "@/components/layouts/DashboardLayout"

// assets
import Plus from "@/assets/icons/plus-white.svg"
import Search from "@/assets/icons/search-mute.svg"

export default function Products(){
  return(
    <DashboardLayout>
      <div className="px-6 mb-10">
        <header className="flex flex-col gap-5 mt-6">
					 <div className="flex justify-between h-10 items-center">
            <div className="flex flex-col justify-center gap-0">
              <p className="text-h text-2xl font-medium">Manajemen Produk</p>
            </div>
            <button className="w-[159px] h-full bg-(--action-bg) flex justify-center items-center
						text-white text-sm rounded-xl">
              <img src={Plus} alt="add product" />
              <p>Tambah Produk</p>
            </button>
					 </div>
					 <div>
            <form 
              className="bg-white border-light w-full justify-between rounded-lg p-4 
							gap-0 grid grid-cols-[73%_15%_10%] h-19"
              action="">
              <div className="relative h-full w-full text-sm">
                <img 
                  className="absolute top-3 left-4"
                  src={Search} alt="search" />
                <input
								 placeholder="Cari produk atau merk"
								 className="h-full rounded-xl w-full bg-(--input-bg) border-light pl-10"
								 type="search" name="search" id="" />
              </div>
              <select
                className="rounded-xl h-full flex justify-center text-sm pl-4 text-h items-center border-light"
                name="category" id="">
                <option value="">Semua kategori</option>
              </select>
              <button className="h-full rounded-xl border-light">
                <p className="text-sm">Filter</p>
              </button>
            </form>
					 </div>

					 <div className="mt-1 grid grid-cols-4 gap-3 justify-between">
							<div className="flex flex-col items-center justify-center bg-white border-white border-light 
							rounded-xl h-[90px]">
								<h2 className="text-h leading-4">18</h2>
								<p className="text-sm">Total Produk</p>
							</div>
							<div className="flex flex-col items-center justify-center bg-white border-white border-light 
							rounded-xl h-[90px]">
								<h2 className="text-h leading-4">18</h2>
								<p className="text-sm">Total Produk</p>
							</div>
							<div className="flex flex-col items-center justify-center bg-white border-white border-light 
							rounded-xl h-[90px]">
								<h2 className="text-h leading-4">18</h2>
								<p className="text-sm">Total Produk</p>
							</div>
							<div className="flex flex-col items-center justify-center bg-white border-white border-light 
							rounded-xl h-[90px]">
								<h2 className="text-h leading-4">18</h2>
								<p className="text-sm">Total Produk</p>
							</div>																					
					 </div>
        </header> 
      </div>
    </DashboardLayout>
  )
}