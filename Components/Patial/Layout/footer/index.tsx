import { Icon } from "@/pages/Components/UI/Icon/Icon"
import {footerSocialMediaIcons} from "@/core/contance/footerIcons"
import {siteCredibilityBadges} from "@/core/contance/footerIcons"


interface footerListType{
    title:string
    subset:Array<string | subsetType>
}

interface subsetType{
    text:string
    icon:string
}

const footerList:footerListType[]=[
    {title:"محصول",
     subset:["ویژگی ها","قیمت گذاری","مطالعات موردی","بررسی کردن","قیمت گذاری"]
    },
    {title:"شرکت",
     subset:["ارتباط با ما","وبلاگ","فرهنگ","درباره","وبلاگ"]
    },
     {title:"پشتیبانی",
     subset:["شروع کردن","مرکز کمک","تنظیمات سرور","کزارش اشکال","پشتیبانی چت"]
    },
     {title:"ارتباط با ما",
     subset:[{text:"rentify@gmail.com",icon:"EmailIcon"},{text:"۰۲۱-۴۳۵۳۶۳",icon:"phoneIcon"},{text:"تهران - زعفرانیه - پلاک ۲۱۳",icon:"locationIcon"}]
    }
]

function Footer(){
    return(
        <div className="flex justify-around gap-6 p-8">
            <div className="flex flex-col gap-4">
                <Icon icon={"rentifyLogoFooter"}/>
                <p className="max-w-xs text-[#45484B] text-sm">
                    در بین بیش از ۵۰۰۰ آگهی ملکی ثبت شده 
                روزانه جستجو کنید و ملک مورد نظرتان را پیدا کنید.
                </p>
                <div className="flex gap-5 border-b-2 border-[#D7D8DA] pb-4">
                 {
                    footerSocialMediaIcons.map((item,index)=>(
                        <Icon key={index} icon={item.icon}/>
                    ))
                 }
                </div>
                <div className="flex gap-3">
                 {
                    siteCredibilityBadges.map((item,index)=>(
                        <img src={item.image} alt={item.title} key={index} />
                    ))
                 }
                </div>
            </div>
            <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          {
            footerList.map((item,index)=>(
                <div>
                    <p key={index} className="text-lg font-[700] text-[#0A58CA] pb-4">{item.title}</p>
                   {
                      item.subset.map((item,index)=>(
                        typeof item.subset=='Array<string>' ? (
                            <p key={index} className="text-[#73767C] text-sm py-1.5">{item}</p>
                        ) : typeof item.subset=='Array<subsetType>' ? (
                               <div key={index} >
                                   <Icon icon={item.icon}/>
                                   <p className="text-[#73767C] text-sm py-1.5">{item.text}</p>
                                </div>
                        ) : null   
                    ))
                   }
                </div>
            ))
             }
            </div>
        </div>
        
    )
}

export default Footer