import Link from "next/link"
import { Icon } from "@/Components/UI/Icon/Icon"
import {MostViewedPropertiesList} from "@/core/contance/MostViewedPropertiesList"

function MostViewedLastWeek(){
    return(
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between py-8">
                <p className="font-[700] text-xl ">پر بازدید ترین‌های هفته‌ی گذشته</p>
                <Link href="" className="flex justify-end gap-1 w-2/12 items-center text-[#0D6EFD] text-sm">مشاهده همه
                    <Icon icon={"arrowLeft"} class="fill-[#0D6EFD] w-2/12"/>
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-4">
            {
              MostViewedPropertiesList.map((item,index)=>(
                <div key={index} className="flex flex-col rounded-lg relative">
                    <div>
                        <img src={item.image} alt={item.title} className=" h-56 w-full rounded-t-xl"/>
                        <div className="bg-[#FFFFFF] p-2 flex flex-col justify-center items-center rounded-full absolute top-4 right-4">
                            <Icon icon={item.LikeIcon} className="w-3 h-[0.65rem]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 px-2 py-4 bg-[#FFFFFF] rounded-b-lg">
                        <div className="flex gap-4">
                            {
                               item.title==="آپارتمان" ? (<p className="bg-[#00966D] text-[#FFFFFF] w-fit py-1 px-2 rounded-xl">{item.title}</p>) :
                               item.title==="خانه ویلایی" ? (<p className="bg-[#D67114] text-[#FFFFFF] w-fit py-1 px-2 rounded-xl">{item.title}</p>) :
                               (<p className="bg-[#084298] text-[#FFFFFF] w-fit py-1 px-2 rounded-xl">{item.title}</p>)
                            }
                            <div className="flex items-center gap-1 text-xs ">
                                <Icon  icon={"locationIcon"} className="w-4"/>
                                <p className="text-[#595C61]">{item.location}</p>
                            </div>
                        </div>
                        <p className="text-[#3D3D3D]">{item.address}</p>
                        <div className="bg-[#F2F3F3] flex justify-between text-[#353739] text-[0.7rem] p-2 rounded-lg">
                           <p>رهن<span className="bg-[#FFFFFF] p-1 ms-1 rounded-lg">{item.mortgage} تومان</span></p>
                           <p>اجاره<span className="bg-[#FFFFFF] p-1 ms-1 rounded-lg">{item.rent} تومان</span></p>
                        </div>
                    </div>
                </div>
              ))  
            }
            </div>
        </div>
    )
}

export default MostViewedLastWeek