
interface selectListType{
    name:string
    id:string
    option:Array<optionType>
}
interface optionType{
    title:string
    value:string
}

export const selectList:selectListType[]=[
    {   name:"موقعیت مکانی",
        id:"Location",
        option:[{title:"تهران- نیاوران",value:"tehran-niavaran"}]
    },
    {   name:'نوع ملک',
        id:"propertyType",
        option:[{title:"آپارتمان",value:"apartment"},{title:"ویلا",value:"villa"},{title:"خانه ویلایی",value:"villaHouse"}]
    },
    {   name:"نوع قرارداد",
        id:"contract",
        option:[{title:"رهن",value:"mortgage"},{title:"اجاره",value:"rent"}]
    }
]
