import Link from "next/link"
import { Icon } from "@/pages/Components/UI/Icon/Icon"

interface propertiestype{
    id:number
    title:string
    location:string
    address:string
    mortgage:string
    rent:string
    image:string
    LikeIcon:string
}

const MostViewedPropertiesList:propertiestype[]=[
    {
    id:1,
    title:"آپارتمان",
    location:"تهران-الهیه",
    address:"۷۰ متری ۲ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/3625b478eb68324b5eec730e248da66203e90854.jpg",
    LikeIcon:"unLikeIcon"
    },
    {
    id:2,
    title:"آپارتمان",
    location:"تهران-الهیه",
    address:"۷۰ متری ۱ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/d7d9d66ffe3c8386a31a461d250f3760f757e8e5.jpg",
    LikeIcon:"likedIcon"
    },
    {
    id:3,
    title:"خانه ویلایی",
    location:"کرج- عظیمیه",
    address:"۴۰۰ متری ۴ خوابه ",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/454cf0d73c858232e7e29324a7348f3335d90879.jpg",
    LikeIcon:"likedIcon"
    },
    {
    id:4,    
    title:"خانه ویلایی",
    location:"تهران-الهیه",
    address:"۴۵۰ متری ۳ خوابه استخر‌‌دار",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/b6648bfcff41e17584e728185ed5174547ce7e9c.jpg",
    LikeIcon:"unLikeIcon"
    },
    {
    id:5,    
    title:"ویلا",
    location:"تهران-الهیه",
    address:"۷۰ متری ۲ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/3625b478eb68324b5eec730e248da66203e90854.jpg",
    LikeIcon:"unLikeIcon"
    },
    {
    id:6,    
    title:"خانه ویلایی",
    location:"تهران-الهیه",
    address:"۷۰ متری ۲ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/d7d9d66ffe3c8386a31a461d250f3760f757e8e5.jpg",
    LikeIcon:"likedIcon"
    },
    {
    id:7,    
    title:"آپارتمان",
    location:"تهران-الهیه",
    address:"۷۰ متری ۲ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/454cf0d73c858232e7e29324a7348f3335d90879.jpg",
    LikeIcon:"unLikeIcon"
    },
    {
    id:8,    
    title:"آپارتمان",
    location:"تهران-الهیه",
    address:"۷۰ متری ۲ خوابه - تهران محمدیه",
    mortgage:"۴,۰۰۰,۰۰۰,۰۰۰",
    rent:"۵۰,۰۰۰,۰۰۰",
    image:"/Images/MostViewedLastWeekComponent/b6648bfcff41e17584e728185ed5174547ce7e9c.jpg",
    LikeIcon:"likedIcon"
    }
]

function MostViewedLastWeek(){
    return(
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between py-8">
                <p className="font-[700] text-xl">پر بازدید ترین‌های هفته‌ی گذشته</p>
                <Link href="" className="flex gap-2 items-center text-[#0D6EFD]">مشاهده همه
                    <Icon icon={"arrowLeft"} class="bg-black w-1/12 fill-[#0D6EFD]" />
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-6">
            {
              MostViewedPropertiesList.map((item,index)=>(
                <div key={index} className="flex flex-col gap-3 h-40 w-48 rounded-lg">
                    <div className="relative">
                        <img src={item.image} alt={item.title} className="absolute"/>
                        <div className="bg-[#FFFFFF] flex flex-col justify-center items-center rounded-full">
                            <Icon icon={item.LikeIcon} className="absolute"/>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <p>{item.title}</p>
                        <div className="flex gap-1">
                            <Icon  icon={"locationIcon"}/>
                            <p>{item.location}</p>
                        </div>
                        <p>{item.address}</p>
                        <div className="bg-[#F2F3F3] flex gap-4">
                           <p>رهن<span className="bg-[#FFFFFF]">{item.mortgage} تومان</span></p>
                           <p>اجاره<span className="bg-[#FFFFFF]">{item.rent} تومان</span></p>
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