export default function Card(){
  return(
    <div className="grid grid-cols-4 gap-3">
      <div className="bg-(--container-bg) border-light rounded-xl h-[190px]">
        <header className="w-full h-[70%] relative">
          <img 
          className="h-full w-full"
          src={item.image} alt="product" />
        </header>
        <main className="flex flex-col pl-3">
          <p className="text-sm">{item.brand}</p>
          <p className="text-h font-[500]">{item.name}</p>
          <div>

          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-(--text-high) text-lg font-[600]">{item.price}</p>
            <p className="text-sm"><s>{item.discountPrice}</s></p>
          </div>
        </main>
      </div>
    </div>
  )
}