import SearchComponent from "@/Components/SearchComponent"

function IntroSection(){
    return(
        <div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <p>در<span className="text-[#0D6EFD] px-1 ">رنتی‌فای</span>دنبال چه ملکی هستید؟</p>
                <SearchComponent />
            </div>
        </div>
    )
}

export default IntroSection