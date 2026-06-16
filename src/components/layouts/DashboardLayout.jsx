// component
import Logo from "@/components/ui/Logo.jsx"

// asset
import Cross from "@/assets/icons/cross-black.svg"
import Notif from "@/assets/icons/notif-mute.svg"

export default function DashboardLayout({children}){
  return(
    <div className="w-full flex flex-row min-h-screen">
      <aside className="flex flex-col w-60 px-4 bg-(--primary-bg) text-(--text-accent)">
        <div className="border-b-(--accent-border) h-16 gap-1 flex items-center">
          <Logo scheme={"dark"}/>
          <p className="text-white">Admin</p>
        </div>
        <ul className="flex flex-col">
          <li className="flex gap-4 items-center h-10">
            <img src={null} alt="" />
            <p>Dashboard</p>
          </li>
        </ul>
        <div>

        </div>
      </aside>
      <main className="flex flex-col w-full">

        <nav className="flex justify-between items-center px-5 bg-white h-16">
          <div className="flex items-center gap-2">
            <button>
              <img src={Cross} alt="" />
            </button>
            <p>Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <button>
              <img src={Notif} alt="" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex justify-center items-center 
              bg-(--accent-bg)">
                <p className="text-(--text-high)">A</p>
              </div>
              <p>Admin</p>
            </div>
          </div>
        </nav>

        <div>
          {children}
        </div>
        
      </main>
    </div>
  )
}