// component
import CheckoutLayout from "@/components/layouts/checkout/CheckoutLayout";

// assets
import Safe from "@/assets/icons/safe-blue.svg"
import Lock from "@/assets/icons/lock-white.svg"

export default function Confirm(){
  return(
    <CheckoutLayout>
      <div>
        <header>
          <h3>Konfirmasi Pesanan</h3>
        </header>
        <main className="mt-7 flex flex-col gap-5">
          <div className="w-full h-fit p-5 flex flex-col gap-1 bg-(--input-bg) rounded-xl">
            <p className="text-h">Alamat Pengiriman</p>
            <div className="flex items-center gap-2">
              <p>Lorem ipsum dolor sit.</p>
              <p>087777</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, repellat.</p>
          </div>

          <div className="w-full h-fit p-5 flex flex-col gap-1 bg-(--input-bg) rounded-xl">
            <p className="text-h">Metode Pengiriman</p>
            <div className="flex items-center gap-2">
              <p>Lorem ipsum dolor sit.</p>
              <p>3-5 Hari</p>
            </div>
          </div>

          <div className="w-full h-fit p-5 flex flex-col gap-1 bg-(--input-bg) rounded-xl">
            <p className="text-h">Produk yang Dipersan</p>
            <ul className="flex flex-col items-center gap-3 mt-4">
              <li className="flex w-full justify-between h-12 items-center text-sm">
                <img
                  className="w-12" 
                  src={null} alt="product" />
                <div className="flex justify-between items-center w-[90%] h-full">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <p>x1</p>
                  </div>
                  <h4 className="text-(--text-high) text-md">Rp 450.000</h4>
                </div>
              </li>
              <li className="flex w-full justify-between h-12 items-center text-sm">
                <img
                  className="w-12" 
                  src={null} alt="product" />
                <div className="flex justify-between items-center w-[90%] h-full">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <p>x1</p>
                  </div>
                  <h4 className="text-(--text-high) text-md">Rp 450.000</h4>
                </div>
              </li>
              <li className="flex w-full justify-between h-12 items-center text-sm">
                <img
                  className="w-12" 
                  src={null} alt="product" />
                <div className="flex justify-between items-center w-[90%] h-full">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <p>x1</p>
                  </div>
                  <h4 className="text-(--text-high) text-md">Rp 450.000</h4>
                </div>
              </li>														
            </ul>
          </div>
					 <div className="w-full bg-(--accent-bg) mt-3 rounded-xl  flex 
						text-xs items-start px-4 gap-3 py-4">
            <img 
              className="w-6"
              src={Safe} alt="safe guarantee" />
            <p>Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan kami. Pembayaran baru akan
							diproses setelah kamu mengkonfirmasi di langkah ini.</p>
          </div>
          <div className="flex row gap-2 justify-between items-center mt-2">
            <button
              type="button"
              onClick={() => window.location.href = "/checkout-payment" }
              className="rounded-xl cursor-pointer
							text-sm w-[15%] h-13 flex justify-center items-center border-light">
								Kembali
            </button>
            <button 
              type="submit"
              className="flex gap-2 text-sm text-white bg-(--action-bg) rounded-xl h-13 items-center
							justify-center w-[85%] cursor-pointer">
              <img 
                className="relative bottom-px"
                src={Lock} alt="payment step" />
								<p>Bayar Rp 450.000 Sekarang</p>
            </button>			
          </div>

        </main>
      </div>
    </CheckoutLayout>
  )
}