import Image from "next/image"
import { useRouter } from "next/router"

function NotFound(){
    const router=useRouter()

    function backToHomepage(){
       router.push('/')
    }

    return(
        <div className="bg-gray-100 py-10">
            <div className="w-10/12 mx-auto h-screen flex flex-col gap-2 items-center bg-[#FFFFFF] rounded-lg">
               <Image
               src="/Images/404-error-with-people-holding-the-numbers.png"
               alt="404-error-pic"
               height={430}
               width={651}/>
               <p className="text-[#0C0C0C]">صفحه‌ی  مورد نظر یافت نشد!</p>
               <p className="text-[#7E8288]">این صفحه در رنتی‌فای یافت نشد. لطفا به صفحه اصلی مراجعه کنید تا املاک مورد نظر خود را پیدا کنید</p>
               <button onClick={backToHomepage} className="px-6 py-3 rounded-lg bg-[#0D6EFD] text-[#FFFFFF]">بازگشت به صفحه اصلی</button>
            </div>
        </div>
    )
}

export default NotFound