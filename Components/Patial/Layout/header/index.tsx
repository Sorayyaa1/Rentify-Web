import Image from "next/image"
import Link from "next/link"
import {navbarLinks} from "@/core/contance/navbarLink"


function Navbar(){
    return(
        <div className="nav flex justify-between items-center py-6 px-10 bg-[#252525] text-[#FFFFFF]">
           <div>
                <Image
                   src="/RentifyIcon.png"
                   alt="rentifyIcon"
                   height={52}
                   width={132} />
            </div>
            <div className="flex justify-center gap-6">
              {
                navbarLinks.map((item,index)=>(
                    <Link key={index} href={item.path} className="font-semibold">{item.title}</Link>
                ))
              }
            </div>
            <div className="flex gap-3">
                <div className="flex gap-2">
                   <button> <p className="border-2 border-[#252525] border-l-amber-50 px-1">ورود</p></button>
                   <button>ثبت‌نام</button>
                </div>
                <button className=" bg-[#0D6EFD]  p-2 rounded-lg"> + ثبت آگهی رایگان</button>
            </div>
        </div>
    )
}

export default Navbar
