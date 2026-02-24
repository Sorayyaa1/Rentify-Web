import { Icon } from "@/Components/UI/Icon/Icon";
import {selectList} from "@/core/contance/searchComponetArray"

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
                
                <select id={item.id} key={index} title="select" className="text-[#73767C]">
                    {
                        item.option.map((item,index)=>(
                            <option key={index} value={item.value} className="text-black">{item.title}</option>
                        ))
                    }
                </select>
            </div>
           ))
           }
           <button className="flex gap-2 py-8 px-6 bg-[#0D6EFD] text-[#FFFFFF] rounded-e-full cursor-pointer">
            <Icon icon={'magnifyingGlass'} />
            <p>جستجو</p>
           </button>
        </form>
    )
}

export default SearchComponent
