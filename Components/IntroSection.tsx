import SearchComponent from "@/Components/SearchComponent"
import Image from "next/image"
import BgIntroSection from "@/public/Images/BgIntroSection.jpg"
function IntroSection(){
    return(
        <div>
            <div className="w-full h-2/5 flex flex-col gap-4 justify-center items-center relative">
                <div className="h-[40rem] w-full bg-black z-20 opacity-83"></div>
                <Image
                 src={BgIntroSection}
                 alt="BgIntroSection"
                 quality={100}
                 style={{
                    objectFit: 'cover',
                    position:"absolute",
                    width:'100%',
                    top:'1px',
                    height:'640px'
                 }}
                />
                <p className="font-[700] text-2xl text-[#FFFFFF] absolute z-22 top-30">در<span className="text-[#0D6EFD] px-1">رنتی‌فای</span>دنبال چه ملکی هستید؟</p>
                <SearchComponent />
            </div>
        </div>
    )
}

export default IntroSection