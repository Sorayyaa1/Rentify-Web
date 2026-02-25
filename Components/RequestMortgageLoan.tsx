
function RequestMortgageLoan(){
    return(
        <div className="w-11/12 mx-auto flex justify-between rounded-xl bg-[#353739] px-2">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-2 p-10">
                    <p className="text-3xl text-[#FFFFFF] font-bold">برای دریافت وام رهن خانه کلیک کنید</p>
                    <p className="text-xl text-[#989BA0]">دریافت وام با کم‌ترین بهره و سریع ترین زمان ممکن</p>
                </div>
                <button className="bg-[#0D6EFD] text-[#FFFFFF] py-3 px-12 rounded-xl">اطلاعات بیشتر...</button>
            </div>
           <img src="/Images/RequestMortgageLoan.png" alt="RequestMortgageLoanPic" className="w-2/5" />
        </div>
    )
}

export default RequestMortgageLoan