export default function Reason(){
  return(
    <div className="flex flex-col mt-5 gap-6 items-center text-center w-full">
      <h3>Kenapa Belanja di BeliMudah?</h3>
      <div className=" rounded-xl border-light gap-10 px-4 py-14 w-full grid grid-cols-2 md:grid-cols-4">
        <article className="flex  flex-col gap-2 justify-center">
          <p className="text-2xl md:text-4xl">🚚</p>
          <p className="text-sm md:text-md text-h">Gratis Ongkir</p>
          <p className="text-xs md:text-sm">Pembelian di atas Rp 100.000 gratis ongkir keseluruh Indonesia</p>
        </article>
        <article className="flex flex-col gap-2 justify-center">
          <p className="text-2xl md:text-4xl">🔒</p>
          <p className="text-sm md:text-md text-h">Pembayaran Aman</p>
          <p className="text-xs md:text-sm">Data kamu terenkripsi dengan standar keamanan tertinggi</p>
        </article>
        <article className="flex flex-col gap-2 justify-center">
          <p className="text-2xl md:text-4xl">↩️</p>
          <p className="text-sm md:text-md text-h">Retur Mudah</p>
          <p className="text-xs md:text-sm">Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet</p>
        </article>
        <article className="flex flex-col gap-2 justify-center">
          <p className="text-2xl md:text-4xl">💬</p>
          <p className="text-sm md:text-md text-h">CS 24/7</p>
          <p className="text-xs md:text-sm">Tim kami siap membantu kamu kapan saja</p>
        </article>												
      </div>
    </div>
  )
}