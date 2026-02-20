import {SelectList} from "@/core/contance/SelectListSearchComponent"

function SearchComponent(){
    return(
        <div className='flex gap-4'>
           {
           SelectList.map(({item}:any,{index}:any)=>(
            <div>
                <label htmlFor={item.id}>{item.name}</label>
                <select id={item.id} key={index}>
                    {
                        item.option.map(({item}:any,{index}:any)=>(
                            <option key={index} value={item.id}>{item}</option>
                        ))
                    }
                </select>
            </div>
           ))
           }
        </div>
    )
}

export default SearchComponent