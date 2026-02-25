import {rentifyServicesMapArray} from "@/core/contance/rentifyServicesMap"
import { Icon } from "./UI/Icon/Icon"


function RentifyServicesMap(){
    return(
        <div className="w-11/12 mx-auto flex flex-col gap-6">
            <p className="text-center font-bold text-2xl"><span className="text-[#0D6EFD]">رنتی‌فای</span> چه طور کار می کند؟</p>
            <div className=" grid grid-cols-4 gap-2 ">
               {
                rentifyServicesMapArray.slice(0,-1).map((item,index)=>(
                    
                        <div key={index} className=" flex flex-col gap-2 items-center justify-center text-center">
                            <div  className="flex items-center justify-center gap-2 relative">
                                <div className="relative">
                                    <div className="flex flex-col justify-center items-center rounded-full bg-[#353739] w-20 h-20 ">
                                       <Icon icon={item.icon} className="w-2/5"/>  
                                    </div>
                                    <p className="w-2/5 text-center rounded-full p-1 bg-[#084298] text-[#FFFFFF] border-[0.1rem] border-white absolute top-6 -left-4">{item.stepNumber}</p>
                                </div>
                                <hr className=" w-full absolute -left-36 border-[0.1rem] border-[#D7D8DA]"></hr>
                            </div>
                            <p className="text-lg ">{item.title}</p>
                            <p className="text-[#989BA0] text-xs w-6/12">{item.decription}</p>
                        </div>
                    
                ))
                }
                {
                   rentifyServicesMapArray.slice(-1).map((item)=>(
                     <div className="w-full flex flex-col gap-2 items-center text-center ">
                            <div className="relative">
                                <div className="flex flex-col justify-center items-center rounded-full bg-[#353739] w-20 h-20 ">
                                   <Icon icon={item.icon} className="w-2/5"/>  
                                </div>
                                <p className="w-2/5 text-center rounded-full p-1 bg-[#084298] text-[#FFFFFF] border-[0.1rem] border-white absolute top-6 -left-4">{item.stepNumber}</p>
                            </div>
                            <p className="text-lg">{item.title}</p>
                            <p className="text-[#989BA0] text-xs w-6/12">{item.decription}</p>
                        </div>
                   ))
                }
            </div>
        </div>
    )
}

export default RentifyServicesMap