function IssuesFixedCard() {
    return (
        <>
            <div className="absolute bottom-0 right-0 z-10 w-[270px] h-[164px] p-5 bg-white rounded-3xl shadow-[0_0_24px_0_#08173529] font-bold text-[#171717]">
                <div className="w-full flex justify-between items-center">
                    <div className="w-[56px] h-[56px] flex justify-center items-center bg-[#9D90FA40] rounded-full">
                        <img src="Images/LOGO/vector.png" alt="Logo" className="w-6 h-6" />
                    </div>
                    <div className="text-sm">
                        <p className="flex items-center text-[#0049C6] gap-[6px]"><img src="Images/LOGO/ui_icon/small-right.png" alt="Arrow" className="w-[10px] h-fit" />14%</p>
                        <p className="font-normal">This Week</p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-sm">Issues Fixed</p>
                    <p className="text-[32px]/[32px]">500K+</p>
                </div>
            </div>
        </>
    )
}
export default IssuesFixedCard;