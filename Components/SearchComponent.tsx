import { Icon } from "@/pages/Components/UI/Icon/Icon";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";


interface selectListType{
    name:string
    id:string
    option:Array<optionType>
}
interface optionType{
    title:string
    value:string
}

const selectList:selectListType[]=[
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

function SearchComponent(){
   
    return(
        <form action="" className='flex gap-4 w-7/12 absolute z-30 top-48 items-center justify-between bg-[#FFFFFF] rounded-full'>
           {
           selectList.map((item,index)=>(
            <div className="flex flex-col gap-2 py-4 ps-12">
                {/* <div className="flex gap-2">
                    <label htmlFor={item.id} className="text-[#73767C]">{item.name}</label>
                    <Icon icon={"arrowDown"}/>
                </div> */}
                
                <select id={item.id} key={index} className="text-[#73767C]">
                    {
                        item.option.map((item,index)=>(
                            <option key={index} value={item.value} className="text-black">{item.title}</option>
                        ))
                    }
                </select>
            </div>
           ))
           }
           {/* {
            <Dropdown>
                {
                    selectList.map((item,index)=>(
                       <div>
                            <DropdownTrigger>
                               <Button variant="bordered" value={item.id}>{item.name}</Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                {
                                    item.option.map((item,index)=>(
                                        <DropdownItem key={index} value={item.value}>
                                           {item.title}
                                       </DropdownItem>
                                    ))
                                }
                              
                           </DropdownMenu>
                       </div>
                    ))
                }
            </Dropdown>
           } */}
           <button className="flex gap-2 py-8 px-6 bg-[#0D6EFD] text-[#FFFFFF] rounded-e-full cursor-pointer">
            <Icon icon={'magnifyingGlass'} />
            <p>جستجو</p>
           </button>
        </form>
    )
}

export default SearchComponent
