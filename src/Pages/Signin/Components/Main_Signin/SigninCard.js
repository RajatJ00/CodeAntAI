import MainCard from "./MainCard.components";
import maincardinfo from "./maincardinfo";

function SigninCard() {
    return (
        <>
            <div className="w-[447px] h-[170px] bg-white rounded-3xl shadow-[0_0_24px_0_#08173529] font-bold text-[#171717]">
                <div className="w-full flex items-center border-b border-[#E6E8F0] p-5 gap-4">
                    <img src="Images/LOGO/codeantai_icon.png" alt="Logo" className="w-7 h-[31px]" />
                    <p className="text-lg">AI to Detect & Autofix Bad Code</p>
                </div>
                <div className="w-full flex text-center justify-evenly items-center mt-6">
                    <MainCard maincard={maincardinfo} />
                </div>
            </div>
        </>
    )
}
export default SigninCard;