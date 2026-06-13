import MainLayout from "@/components/layouts/MainLayout";

export default function ProductDetails(){
  return(
    <MainLayout>
      <div className="w-[83%] flex flex-col">
        <div className="flex flex-row h-[35rem] bg-[yellow]">
          <section className="w-[50%] bg-[green] flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img 
                className="w-full h-[80%] bg-[white]"
                src={null} alt="product image" />
            </div>
            <div>
              <ul className="flex flex-row gap-2">
                <li className="w-[64px] h-[64px] rounded-lg">
                  <img src={null} alt="product image" />
                </li>
								<li className="w-[64px] h-[64px] rounded-lg">
                  <img src={null} alt="product image" />
                </li>
              </ul>
            </div>
          </section>
          <section className="w-[50%]">

          </section>
        </div>
        <div className="h-[40rem]">

        </div>
      </div>
    </MainLayout>
  )
}