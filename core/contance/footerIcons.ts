
interface footerSocialMediaIconsType {
     title:string
     icon:string
}

interface siteCredibilityBadgesType {
    title:string
    image:string
}


interface footerListType{
    title:string
    subset:Array<string | subsetType>
}

interface subsetType{
    text:string
    icon:string
}

export const footerList:footerListType[]=[
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

export const footerSocialMediaIcons:footerSocialMediaIconsType[]=[
    {
     title:"telegram",
     icon:"telegramIcon"  
    },
    {
     title:"linkedIn",
     icon:"linkedInIcon"  
    },
    {title:"instagram",
     icon:"instagramIcon"
    },
    {
     title:"facebook",
     icon:"facebookIcon"  
    },
]

export const siteCredibilityBadges : siteCredibilityBadgesType[]=[
    {title:"associationOfRealEstateConsultantsLogo",image:"/Images/Footer/images 1.png"},
    {title:"NationalDigitalMediaRegistrationMarkLogo",image:"/Images/Footer/logo.png"},
    {title:"SiteReputationBadgeLogo",image:"/Images/Footer/Frame 427320846.png"}
]

