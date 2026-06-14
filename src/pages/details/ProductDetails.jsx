import MainLayout from "@/components/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import moneyFormat from "@/utils/money-format";

export default function ProductDetails(){
  const [data, setData] = useState({})
  const [prodVariant, setProdVariant] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()

  function handleRatingStars(rating){
    return Array.from({ length: 5 }).map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={solidStar}
        className={`${index < Math.round(rating) ? 'text-(--text-star)' : 'text-(--text-light)'}`}
      />  
    ))
  }

  useEffect(() => {
    async function getProductById(count = 3){
      try{
        const res = await fetch(`/data/products.json`)
        const data = await res.json()
        const dataById = data.filter((item) => item.id === id)[0] // selecting data with matches id
        setData(dataById)
          
      } catch(err){
        // will retry 3 times if error happend (recovering)
        if(count >= 1) getProductById(count-1)
        return console.error(err.message)
      }
    }
    getProductById()
  },[id])

  function handleDecreastQty(){

  }

  function handleIncreastQty(){
    
  }

  return(
    <MainLayout>
      <div className="w-[83%] flex flex-col">
        <div className="flex flex-row h-fit bg-[yellow] mt-7">
          <section className="w-[48%] bg-[green] flex flex-col">
            <div className="rounded-xl overflow-hidden h-[604px] relative">
              { data.discount &&
                <div className="px-4 py-1 rounded-full bg-(--info-bg) text-light flex absolute 
                justify-center left-2 top-2">
                  {data.discount}
                </div>
              }
              <img 
                className="w-full h-full bg-cover bg-center"
                src={data.image} alt="product image" />
            </div>
            <div className="mt-4">
              <ul className="flex flex-row gap-3">
                <li className="w-[64px] h-[64px] rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={null}
                    className="h-full w-full">
                    <img src={data.image} alt="product image" />
                  </button>
                </li>
                <li className="w-[64px] h-[64px] rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={null}
                    className="h-full w-full">
                    <img src={data.image} alt="product image" />
                  </button>
                </li>
              </ul>
            </div>
          </section>

          <section className="w-[52%] flex justify-end">
            <div className="w-[96%] h-full bg-[white] flex flex-col gap-3">
              <div className="flex gap-1 items-center m-0">
                <p>{data.brand}</p>
                <p>·</p>
                <p>{data?.cat?.name}</p>
              </div>

              <h2 className="leading-1 m-0 text-h">{data.name}</h2>

              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row">
                  { handleRatingStars(data.rating) }
                </div>
                <p>{data.rating}</p>
                <p>({data.ratingTotal})</p>
                <div className="bg-(--success-bg) ml-4 w-130px h-20px px-3 py-1 flex flex-row 
                text-sm text-(--text-success) gap-1">
                  <p className="">Stok tersedia</p>
                  <p>({data.stocks})</p>
                </div>
              </div>

              <div className="w-full h-[120px] bg-(--accent-bg) rounded-lg mt-2 px-3 flex flex-col justify-center">
                <div className="flex flex-row gap-3 items-center">
                  <h1 className="text-(--text-high)">{moneyFormat(data?.price)[0]}</h1>
                  <p className="text-lg"><s>{moneyFormat(data?.discountPrice)[0]}</s></p>
                  <div className="text-light text-sm bg-(--info-bg) rounded-full flex px-3 py-1">
                    <p>Hemat {data?.discount?.slice(1,(data.discount.length))}</p>
                  </div>
                </div>
                <p className="text-sm text-(--text-success)">
                  Kamu hemat {moneyFormat(data?.discountPrice - data?.price)[0]}</p>
              </div>

              <div className="flex flex-col mt-3">
                <div className="flex flex-row gap-2 ">
                  <p className="text-h">Warna:</p>
                  <p className="text-(--text-high)">{prodVariant.charAt(0).toUpperCase() + prodVariant.slice(1)}</p>
                </div>
                <div className="flex flex-row gap-3 w-[50%] mt-2 text-sm">
                  {data?.variants?.map((item, index) => (
                    <div className="relative" key={index}>
                      <input 
                        className="absolute hidden top-4 left-3 peer"
                        type="radio" name={`color`} 
                        onChange={(e) => setProdVariant(e.target.value)}
                        id={`${item.toLowerCase()}`} 
                        value={`${item.toLowerCase()}`} 
                      />
                      <label 
                        className="border-(--border) border rounded-lg cursor-pointer 
                        h-[2.2rem] flex justify-center peer-checked:border-(--text-high)
                        peer-checked:text-(--text-high) items-center px-3"
                        htmlFor={`${item.toLowerCase()}`}>{item}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-h">Jumlah</p>
                <div className="flex w-fit h-[2rem] rounded-lg border-light">
                  <button
                    className="w-[3.5rem] cursor-pointer"
                    onClick={handleIncreastQty}
                  >+</button>
                  <p className="w-7 text-center">{quantity}</p>
                  <button
                    className="w-[3.5rem] cursor-pointer"
                    onClick={handleDecreastQty}
                  >-</button>
                </div>
              </div>

            </div>
          </section>
        </div>
        <div className="h-[40rem]">

        </div>
      </div>
    </MainLayout>
  )
}