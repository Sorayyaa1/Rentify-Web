import {rentifyServicesList} from "@/core/contance/rentifyServicesArray"

function RentifyServices(){
    return(
        <div className="w-11/12 mx-auto flex flex-col gap-8 ">
            <p className="text-center font-bold text-2xl">با خدمات <span className="text-[#0D6EFD]">رنتی‌فای</span> آشنا شوید</p>
            <div className=" grid grid-cols-3 gap-x-4 items-center">
               {
                rentifyServicesList.map((item,index)=>(
                    item.id==2 ? (
                        <div key={index} className="flex flex-col items-center gap-4 p-4 rounded-lg bg-[#FFFFFF] mx-auto h-116">
                        <img src={item.image} alt={item.title} />
                        <p className="font-semibold">{item.title}</p>
                        <p className="pb-15 text-[#595C61] text-sm">{item.description}</p>
                        <button className="text-[#FFFFFF] bg-[#0D6EFD] py-2 w-11/12 rounded-lg">{item.button}</button>
                    </div>
                    ) : (
                    <div key={index} className="flex flex-col items-center gap-4 p-4 rounded-lg bg-[#FFFFFF] mx-auto h-108">
                        <img src={item.image} alt={item.title} />
                        <p className="font-semibold">{item.title}</p>
                        <p className="pb-8 text-[#595C61] text-sm">{item.description}</p>
                        <button className="text-[#FFFFFF] bg-[#0D6EFD] py-2 w-11/12 rounded-lg">{item.button}</button>
                    </div>
                    )
                ))
               }
            </div>
        </div>
    )
}

export default RentifyServices