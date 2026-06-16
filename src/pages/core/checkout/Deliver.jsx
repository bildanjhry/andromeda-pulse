// component
import CheckoutLayout from "@/components/layouts/checkout/CheckoutLayout"

// assets
import Delivery from "@/assets/icons/delivery-blue.svg"
import ArrowRight from "@/assets/icons/bc-arrow-right-white.svg"

export default function Deliver(){
  return(
    <CheckoutLayout>
      <div>
        <header className="flex items-center gap-2">
          <img 
            className="w-6 "
            src={Delivery} alt="" />
          <h3>Alamat Pengiriman</h3>
        </header>
        <main className="mt-10 flex flex-col">
          <form 
            className="flex flex-col gap-5 text-sm"
            action="">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="name">Nama Penerima *</label>
                <input 
                  placeholder="Masukan Nama Penerima"
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="text" id="name" value={null} 
                />
              </div>
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="phone">Nomor Telepon *</label>
                <input 
                  placeholder="Masukan Nomor Telpon Penerima"
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="text" id="phone" value={null} 
                />
              </div>							
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Email *</label>
              <input 
                placeholder="Masukan Email Penerima"
                className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                type="email" id="email" value={null} 
              />
            </div>	
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="address">Alamat Lengkap *</label>
              <input 
                placeholder="Masukan Email Penerima"
                className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                type="text" id="address" value={null} 
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="city">Kota *</label>
                <input 
                  placeholder="Kota"
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="text" id="city" value={null} 
                />
              </div>
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="province">Provinsi *</label>
                <input 
                  placeholder="Provinsi"
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="text" id="province" value={null} 
                />
              </div>							
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="post-code">Kode Pos *</label>
                <input 
                  placeholder="Kode Pos Penerima"
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="number" id="post-code" value={null} 
                />
              </div>
              <div className="flex flex-col gap-2 w-[49%]">
                <label htmlFor="optional">Catatan (optional)</label>
                <input 
                  placeholder="Warna Pagar, dll."
                  className="w-full h-[46px] bg-(--input-bg) rounded-xl pl-4 border-light"
                  type="text" id="optional" value={null} 
                />
              </div>							
            </div>		
            <div className="mt-4 w-full flex flex-col gap-3">
              <h3>Metode Pengiriman</h3>
              <div className="flex flex-col w-full mt-2">
                <ul className="flex flex-col gap-4">
                  <li className="relative">
                    <input
                      className="absolute top-7.5 left-4 peer/jne-reg" 
                      type="radio" id="jne-reg" name="delivery-method" value={["JNE Reguler", "3-5 Hari Kerja"]} />
                    <label
                      className="w-full items-center rounded-xl border-2 h-[72px] 
										cursor-pointer peer-checked/jne-reg:border-(--main-border) border-(--border) flex justify-between pl-12 pr-6" 
                      htmlFor="jne-reg">
                      <div className="flex flex-col justify-center">
                        <p className="text-h font-semibold">JNE Reguler</p>
                        <p className="text-xs">3-5 Hari Kerja</p>
                      </div>
                      <p className="text-(--text-success)">GRATIS</p>
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      className="absolute top-7.5 left-4 peer/jne-exp" 
                      type="radio" id="jne-exp" name="delivery-method" value={["JNE Express", "1-2 Hari Kerja"]} />
                    <label
                      className="w-full items-center rounded-xl border-2 h-[72px] 
										cursor-pointer peer-checked/jne-exp:border-(--main-border) border-(--border) flex justify-between pl-12 pr-6" 
                      htmlFor="jne-exp">
                      <div className="flex flex-col justify-center">
                        <p className="text-h font-semibold">JNE Express</p>
                        <p className="text-xs">1-2 Hari Kerja</p>
                      </div>
                      <p className="text-(--text-success)">GRATIS</p>
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      className="absolute top-7.5 left-4 peer/same-day" 
                      type="radio" id="same-day" name="delivery-method" value={["Same Day", "Hari ini (sebelum 16:00)"]} />
                    <label
                      className="w-full items-center rounded-xl border-2 h-[72px] 
										cursor-pointer peer-checked/same-day:border-(--main-border) border-(--border) flex justify-between pl-12 pr-6" 
                      htmlFor="same-day">
                      <div className="flex flex-col justify-center">
                        <p className="text-h font-semibold">Same Day</p>
                        <p className="text-xs">Hari ini (sebelum 16:00)</p>
                      </div>
                      <p className="text-(--text-success)">GRATIS</p>
                    </label>
                  </li>

                </ul>
              </div>
              <button 
							type="submit"
							className="flex gap-2 text-sm text-white bg-(--main-bg) rounded-xl h-13 items-center
							justify-center w-full mt-4 cursor-pointer">
                <p>Lanjut ke pembayaran</p>
                <img 
								className="relative top-px"
								src={ArrowRight} alt="payment step" />
              </button>
            </div>																						
          </form>
        </main>
      </div>
    </CheckoutLayout>
  )
}