import { Link } from "react-router"

// component
import DashboardLayout from "@/components/layouts/DashboardLayout"

// assets
import Stat from "@/assets/icons/stat-blue.svg"
import ArrowUp from "@/assets/icons/arrow-up-green.svg"
import StatGraph from "@/assets/icons/stat-graphic.svg"
import DonutChart from "@/assets/icons/donut-chart.svg"
import ArrowUpBlue from "@/assets/icons/arrow-up-blue.svg"

export default function Dashboard(){
  return(
    <DashboardLayout>
      <div className="px-6 mb-10">
        <header className="flex flex-col gap-5 mt-6">
					 <div className="flex justify-between h-12 items-center">
            <div className="flex flex-col justify-center gap-0">
              <p className="text-h text-2xl font-medium">Dashboard</p>
              <p className="text-sm">Selamat datang kembali! Ini ringkasan bisnis hari ini.</p>
            </div>
            <p>28 Mei 2026</p>
					 </div>

					 <div className="grid grid-cols-4 mt-2 justify-between gap-3">
            <div className="flex flex-col p-4 rounded-2xl bg-white border-light justify-between">
              <header className="flex justify-between w-full">
                <p className="text-xs">Total Pendapatan (Bulan Ini)</p>
                <div className="w-9 h-9 rounded-xl flex justify-center items-center bg-(--accent-bg)">
                  <img src={Stat} alt="" />
                </div>
              </header>
              <main className="flex flex-col justify-end gap-0 h-15">
                <h2 className="text-h leading-5">Rp 125.000.000</h2>
                <div className="flex items-center gap-1">
                  <img src={ArrowUp} alt="" />
                  <p className="text-xs text-(--text-success)">18.2% dari bulan lalu</p>
                </div>
              </main>
            </div>

            <div className="flex flex-col p-4 rounded-2xl bg-white border-light justify-between">
              <header className="flex justify-between w-full">
                <p className="text-xs">Total Pendapatan (Bulan Ini)</p>
                <div className="w-9 h-9 rounded-xl flex justify-center items-center bg-(--accent-bg)">
                  <img src={Stat} alt="" />
                </div>
              </header>
              <main className="flex flex-col justify-end gap-0 h-15">
                <h2 className="text-h leading-5">Rp 125.000.000</h2>
                <div className="flex items-center gap-1">
                  <img src={ArrowUp} alt="" />
                  <p className="text-xs text-(--text-success)">18.2% dari bulan lalu</p>
                </div>
              </main>
            </div>

            <div className="flex flex-col p-4 rounded-2xl bg-white border-light justify-between">
              <header className="flex justify-between w-full">
                <p className="text-xs">Total Pendapatan (Bulan Ini)</p>
                <div className="w-9 h-9 rounded-xl flex justify-center items-center bg-(--accent-bg)">
                  <img src={Stat} alt="" />
                </div>
              </header>
              <main className="flex flex-col justify-end gap-0 h-15">
                <h2 className="text-h leading-5">Rp 125.000.000</h2>
                <div className="flex items-center gap-1">
                  <img src={ArrowUp} alt="" />
                  <p className="text-xs text-(--text-success)">18.2% dari bulan lalu</p>
                </div>
              </main>
            </div>

            <div className="flex flex-col p-4 rounded-2xl bg-white border-light justify-between">
              <header className="flex justify-between w-full">
                <p className="text-xs">Total Pendapatan (Bulan Ini)</p>
                <div className="w-9 h-9 rounded-xl flex justify-center items-center bg-(--accent-bg)">
                  <img src={Stat} alt="" />
                </div>
              </header>
              <main className="flex flex-col justify-end gap-0 h-15">
                <h2 className="text-h leading-5">Rp 125.000.000</h2>
                <div className="flex items-center gap-1">
                  <img src={ArrowUp} alt="" />
                  <p className="text-xs text-(--text-success)">18.2% dari bulan lalu</p>
                </div>
              </main>
            </div>												
					 </div>

        </header>
        <main className="w-full grid grid-cols-6 gap-4.5 mt-6">
          <div className="bg-white col-span-4 h-[401px] rounded-2xl border-light p-5">
            <header className="flex items-center justify-between h-[27px]">
              <h4 className="text-h font-medium text-[18px]">Pendapatan dan Pesanan (2026)</h4>
              <div className="border-light flex justify-center items-center h-full 
							text-sm rounded-lg px-5">
								12 Bulan Terakhir
              </div>
            </header>
            <main className="w-full mt-10">
              <img src={StatGraph} alt="" />
            </main>
          </div>
          <div className="bg-white col-span-2 h-[401px] rounded-2xl border-light p-5">
            <header className="flex items-center justify-between h-[27px]">
              <h4 className="text-[18px] text-h font-medium">Penjualan perkategori</h4>
            </header>
            <main className="mt-5 flex flex-col gap-2">
              <img src={DonutChart} alt="" />
              <div className="flex flex-col gap-2">
                <ul className="flex justify-between items-center">
                  <li className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-(--main-bg)"></span>
                    <p className="text-xs">Elektronik</p>
                  </li>
                  <li className="text-h text-sm">
										45%
                  </li>
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="flex gap-1.5  items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-(--main-bg)"></span>
                    <p className="text-xs">Elektronik</p>
                  </li>
                  <li className="text-h text-sm">
										45%
                  </li>
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="flex gap-1.5  items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-(--main-bg)"></span>
                    <p className="text-xs">Elektronik</p>
                  </li>
                  <li className="text-h text-sm">
										45%
                  </li>
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="flex gap-1.5  items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-(--main-bg)"></span>
                    <p className="text-xs">Elektronik</p>
                  </li>
                  <li className="text-h text-sm">
										45%
                  </li>
                </ul>
                <ul className="flex justify-between items-center">
                  <li className="flex gap-1.5  items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-(--main-bg)"></span>
                    <p className="text-xs">Elektronik</p>
                  </li>
                  <li className="text-h text-sm">
										45%
                  </li>
                </ul>																
              </div>
            </main>
          </div>

          <div className="bg-white col-span-3 h-[430px] rounded-2xl border-light p-5">
            <header className="flex items-center justify-between">
						 <h4 className="text-[18px] text-h font-medium">Penjualan perkategori</h4>
						 <Link
						 	to={""}
                className="flex items-center gap-1 text-sm text-(--text-high)">
                <p>Lihat Semua</p>
                <img src={ArrowUpBlue} alt="" />
						 </Link>
            </header>
            <main className="mt-5 flex flex-col gap-0">
              <ul className="flex items-center justify-between w-full border-b-light py-3 tex-sm">
                <li className="flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-h text-sm font-semibold">#BM98765432</p>
                    <div className="bg-(--success-bg) text-(--text-success) text-xs rounded-full py-1 px-2.5">Terkirim</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>Budi Santoso ·</p>
                    <p>28 Mei 2026</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end text-sm">
                    <p className="text-(--text-high)">RP 450.000</p>
                    <p className="">2 Item</p>
                  </div>
                </li>
              </ul>
              <ul className="flex items-center justify-between w-full border-b-light py-3 tex-sm">
                <li className="flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-h text-sm font-semibold">#BM98765432</p>
                    <div className="bg-(--success-bg) text-(--text-success) text-xs rounded-full py-1 px-2.5">Terkirim</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>Budi Santoso ·</p>
                    <p>28 Mei 2026</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end text-sm">
                    <p className="text-(--text-high)">RP 450.000</p>
                    <p className="">2 Item</p>
                  </div>
                </li>
              </ul>
              <ul className="flex items-center justify-between w-full border-b-light py-3 tex-sm">
                <li className="flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-h text-sm font-semibold">#BM98765432</p>
                    <div className="bg-(--success-bg) text-(--text-success) text-xs rounded-full py-1 px-2.5">Terkirim</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>Budi Santoso ·</p>
                    <p>28 Mei 2026</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end text-sm">
                    <p className="text-(--text-high)">RP 450.000</p>
                    <p className="">2 Item</p>
                  </div>
                </li>
              </ul>
              <ul className="flex items-center justify-between w-full border-b-light py-3 tex-sm">
                <li className="flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-h text-sm font-semibold">#BM98765432</p>
                    <div className="bg-(--success-bg) text-(--text-success) text-xs rounded-full py-1 px-2.5">Terkirim</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>Budi Santoso ·</p>
                    <p>28 Mei 2026</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end text-sm">
                    <p className="text-(--text-high)">RP 450.000</p>
                    <p className="">2 Item</p>
                  </div>
                </li>
              </ul>
              <ul className="flex items-center justify-between w-full py-3 tex-sm">
                <li className="flex-col">
                  <div className="flex items-center gap-2">
                    <p className="text-h text-sm font-semibold">#BM98765432</p>
                    <div className="bg-(--success-bg) text-(--text-success) text-xs rounded-full py-1 px-2.5">Terkirim</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>Budi Santoso ·</p>
                    <p>28 Mei 2026</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end text-sm">
                    <p className="text-(--text-high)">RP 450.000</p>
                    <p className="">2 Item</p>
                  </div>
                </li>
              </ul>																												
            </main>
          </div>

          <div className="bg-white col-span-3 h-[430px] rounded-2xl border-light p-5">
            <header className="flex items-center justify-between">
						 <h4 className="text-[18px] text-h font-medium">Produk Terlaris</h4>
						 <Link
						 	to={""}
                className="flex items-center gap-1 text-sm text-(--text-high)">
                <p>Lihat Semua</p>
                <img src={ArrowUpBlue} alt="" />
						 </Link>
            </header>
            <main className="mt-5">
              <ul className="flex items-center justify-between text-sm py-3 border-b-light">
                <li className="flex items-center gap-7">
                  <p>1</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <div className="flex gap-1">
                      <p>156 Terjual</p>
                      <p>Stok: 45</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-(--text-high)">Rp 70.200.000</p>
                </li>
              </ul>
              <ul className="flex items-center justify-between text-sm py-3 border-b-light">
                <li className="flex items-center gap-7">
                  <p>2</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <div className="flex gap-1">
                      <p>156 Terjual</p>
                      <p>Stok: 45</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-(--text-high)">Rp 70.200.000</p>
                </li>
              </ul>
              <ul className="flex items-center justify-between text-sm py-3 border-b-light">
                <li className="flex items-center gap-7">
                  <p>3</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <div className="flex gap-1">
                      <p>156 Terjual</p>
                      <p>Stok: 45</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-(--text-high)">Rp 70.200.000</p>
                </li>
              </ul>
              <ul className="flex items-center justify-between text-sm py-3 border-b-light">
                <li className="flex items-center gap-7">
                  <p>4</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <div className="flex gap-1">
                      <p>156 Terjual</p>
                      <p>Stok: 45</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-(--text-high)">Rp 70.200.000</p>
                </li>
              </ul>
              <ul className="flex items-center justify-between text-sm py-3">
                <li className="flex items-center gap-7">
                  <p>5</p>
                  <div className="flex flex-col justify-center">
                    <p className="text-h">Headphone Wireless Premium</p>
                    <div className="flex gap-1">
                      <p>156 Terjual</p>
                      <p>Stok: 45</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="text-(--text-high)">Rp 70.200.000</p>
                </li>
              </ul>																												
            </main>
          </div>
        </main>
      </div>
    </DashboardLayout>
  )
}