import SearchComponent from "@/Components/SearchComponent"
import Image from "next/image"
import BgIntroSection from "@/public/Images/BgIntroSection.jpg"
import { Icon } from "@/Components/UI/Icon/Icon"

interface propertyType{
    image:string
    title:string
    count:string
}

const properties:propertyType[]=[
    {image:"/Images/IntroSection/Villa.jpg",
     title:"ویلا",
     count:"+۹۲",
    },
     {image:"/Images/IntroSection/Apartement.jpg",
     title:"آپارتمان",
     count:"+۹۲",
    },
    {image:"/Images/IntroSection/villaHouse.jpg",
     title:"خانه ویلایی",
     count:"+۹۲",
     }
    ]
function IntroSection(){
    return(
        <div className="relative">
            <div className="w-full h-2/5 flex flex-col gap-4 justify-center items-center relative">
                <div className="h-[40rem] w-full bg-black z-20 opacity-83 rounded-b-2xl"></div>
                <Image
                 src={BgIntroSection}
                 alt="BgIntroSection"
                 quality={100}
                 style={{
                    objectFit: 'cover',
                    position:"absolute",
                    width:'100%',
                    top:'1px',
                    height:'640px',
                    borderRadius:'24px'
                 }}
                />
                <p className="font-[700] text-2xl text-[#FFFFFF] absolute z-22 top-36">در<span className="text-[#0D6EFD] px-1">رنتی‌فای</span>دنبال چه ملکی هستید؟</p>
                <SearchComponent />
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-6 absolute z-40 top-6/12 right-[3.3rem] ">
                {
                   properties.map((item,index)=>(
                      <div key={index} className="flex flex-col gap-3 rounded-lg h-96 w-96 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full absolute rounded-lg"/>
                        <div className="flex justify-between px-4 py-2 w-[95%] mx-auto bg-[#FFFFFF] rounded-lg z-10 absolute bottom-[0.5rem] right-[0.5rem]">
                            <div className="flex flex-col gap-1">
                               <p className="font-semibold">{item.title}</p>
                               <p className="text-[#989BA0]">{item.count} ملک</p>
                            </div>
                            <div className="bg-[#0D6EFD] rounded-full w-[3rem] flex flex-col justify-center items-center">
                               <Icon  icon={"arrowLeft"} className="fill-white"/>
                            </div>
                        </div>
                      </div>
                   )) 
                }
            </div>
  
        </div>
    )
}

export default IntroSection