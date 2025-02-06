import { ArrowLeftFromLine, ArrowUp, BellDot, BookMarked, FilePenLine, MonitorDown, Search, Table2, Telescope } from "lucide-react"

export const Sidebar = () => {
  return (
    <div className='h-screen w-[20%]  border-r-1 bg-black px-8 text-white'>
        <div className="flex h-24 items-center justify-evenly border-b-1 border-grey-400">
            <p >Paint Gallery</p>
            <p className="cursor pointer"> <ArrowLeftFromLine />  </p>          
        </div>
        <div className="border-b-1 border-grey-400">
            <div className="flex items-center justify-between px-6 ">
                <p className="font-semibold text-xl pt-4">Dashboard</p>
                <p className="cursor pointer"> <ArrowUp />  </p> 
            </div>         
             <div className="flex flex-col items-center py-4"> 
                <div className="flex gap-2 items-center "><p><Table2 size={20} strokeWidth={1.25} /></p> <p>feed</p></div>
                <div className="flex gap-2 items-center"><p><FilePenLine  size={20} strokeWidth={1.25}/></p> <p> edit</p></div>
                <div className="flex gap-2 items-center"><p><Search  size={20} strokeWidth={1.25}/></p> <p>search</p></div>
            </div>
        </div>

        <div>
            <ul className="">
                <li className="flex gap-2 items-center p-2">
                    <p><Telescope size={20} strokeWidth={1} /></p>
                    <p>Explore</p>
                </li>
                <li className="flex gap-2 items-center p-2 ">
                    <p><BookMarked size={20} strokeWidth={1} />
                    </p> <p>Bookmarks</p>
                </li>
                <li className="flex gap-2 items-center p-2">
                    <p><MonitorDown size={20} strokeWidth={1} /></p>
                    <p>Download</p>
                </li>
                <li className="flex gap-2 items-center p-2">
                    <p><BellDot size={20} strokeWidth={1} /></p>
                    <p>Notification</p>
                </li>
            </ul>
        </div>
    </div>
  )
}