import {rentifyServicesMapArray} from "@/core/contance/rentifyServicesMap"
import { Icon } from "./UI/Icon/Icon"

function RentifyServicesMap(){
    return(
        <div className="w-10/12 mx-auto flex flex-col gap-6">
            <p className="text-center font-[700] text-2xl"><span className="text-[#0D6EFD]">رنتی‌فای</span> چه طور کار می کند؟</p>
            <div className="w-full flex justify-between gap-4">
               {
                rentifyServicesMapArray.map((item,index)=>(
                   <div key={index} className="w-9/12 flex flex-col gap-2 items-center border-2 border-amber-200">
                        <div className="relative">
                            <div className="flex flex-col justify-center items-center rounded-full bg-[#353739] w-20 h-20 ">
                               <Icon icon={item.icon} className="w-2/5"/>  
                            </div>
                            <p className="w-2/5 text-center rounded-full p-1 bg-[#084298] text-[#FFFFFF] border-[0.1rem] border-white absolute top-6 -left-4">{item.stepNumber}</p>
                        </div>
                        <p className="text-lg">{item.title}</p>
                        <p className="text-[#989BA0] text-xs">{item.decription}</p>
                   </div>
                ))
               }
            </div>
        </div>
    )
}

export default RentifyServicesMap