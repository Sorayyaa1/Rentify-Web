
interface selectListType{
    name:string
    id:string
    option:Array<string>
}

const selectList:selectListType[]=[
    {name:"نوع قرارداد",id:"contract",option:["رهن","اجاره"]},
    {name:'نوع ملک',id:"propertyType",option:["آپارتمان","ویلا","خانه ویلایی"]},
    {name:"موقعیت مکانی",id:"Location",option:["تهران- نیاوران"]}
]

function SearchComponent(){
   
    return(
        <form action="" className='flex gap-4'>
           {/* {
           selectList.map(({item}:any,{index}:any)=>(
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
           } */}
        </form>
    )
}

export default SearchComponent