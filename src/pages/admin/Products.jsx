import { useEffect, useState } from "react"
import getProducts from "@/services/get-products.js"
import moneyFormat from "@/utils/money-format.js"

// component
import DashboardLayout from "@/components/layouts/DashboardLayout"

// assets
import Plus from "@/assets/icons/plus-white.svg"
import Search from "@/assets/icons/search-mute.svg"
import Watch from "@/assets/icons/watch-mute.svg"
import Edit from "@/assets/icons/edit-mute.svg"
import Delete from "@/assets/icons/delete-mute.svg"


export default function Products(){
  const [data, setData] = useState()

  useEffect(() => {
    async function take(){
      const data = await getProducts()
      setData(data)
    }
    take()
  },[])

  console.log(data)

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

        <main className="w-full mt-4 border-light rounded-xl">
          <div className="rounded-t-xl bg-white items-center h-[46px] p-4">
            <p className="text-sm">18 Produk</p>
          </div>
          <table className="w-full p-4 rounded-b-xl">
            <thead>
              <tr className="bg-(--input-bg) h-[46px] text-sm text-left h-5">
                <td className="pl-4">Produk</td>
                <td className="w">Kategori</td>
                <td className="w">Harga</td>
                <td className="">Stok</td>
                <td>Rating</td>
                <td>Status</td>
                <td>Aksi</td>
              </tr>
            </thead>
            <tbody className="bg-white text-sm">
              {data?.map((item, index) => (
                <tr 
                  key={index}
                  className="h-[66px] border-b-light">
                  <td className="flex pl-4 gap-2 items-center h-[66px] w-[290px]">
                    <img 
                      className="w-[40px] h-[40px] rounded-lg"
                      src={item.image} alt="" />
                    <div className="flex flex-col justify-center ">
                      <p className="text-h">{item.name}</p>
                      <p className="text-xs">{item.brand}</p>
                    </div>
                  </td>
                  <td className="w-[150px]">
                    <div className="px-2 py-[2.5px] bg-(--accent-bg) w-fit rounded-full text-(--text-high) text-xs">{item.cat.name}</div>
                  </td>
                  <td className="w-[150px]">
                    <ul>
                      <li><p className="text-(--text-high)">{moneyFormat(item.price)[0]}</p></li>
                      <li className="text-xs"><s>{moneyFormat(item?.discountPrice)[0]}</s></li>
                    </ul>
                  </td>
                  <td className="w-[100px]">
                    <p>{item.stocks}</p>
                  </td>
                  <td className="w-[135px]">
                    <p>{item.rating} <span>({item.ratingTotal})</span></p>
                  </td>
                  <td className="w-[220px]">
                    <ul className="flex gap-2 items-center">
                      {item?.status?.map((item) => ((
                        <li className="rounded-full px-3 py-1 bg-(--accent-bg) text-(--text-high) text-xs">
                          {item}
                        </li>
                      )))}
                    </ul>
                  </td>
                  <td className="w-[120px]">
                    <ul className="flex gap-3 items-center">
                      <li className=" text-xs">
                        <button className="cursor-pointer">
                          <img src={Watch} alt="" />
                        </button>
                      </li>
                      <li className=" text-xs">
                        <button className="cursor-pointer">
                          <img src={Edit} alt="" />
                        </button>
                      </li>
                      <li className=" text-xs">
                        <button className="cursor-pointer">
                          <img src={Delete} alt="" />
                        </button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main> 
      </div>
    </DashboardLayout>
  )
}