import IssuesFixedCard from "./Components/Main_Signin/IssuesFixedCard";
import SigninCard from "./Components/Main_Signin/SigninCard";
import MainSigin from "../Signin/Components/SignInfo/Main_Signin";

function SigninPage() {
    return (
        <div className="lg:w-screen sm:w-[440px] h-screen bg-[#FAFAFA] select-none font-Inter flex">
            <div className="lg:w-[50%] lg:block sm:hidden h-screen flex flex-row justify-center shadow-[0_0_24px_0_#08173529] border-r border-[#E9EAEB] bg-white">
                <div className="relative w-[474px] h-[322px] mt-56">
                    <SigninCard />
                    <IssuesFixedCard />
                </div>
                <img src="Images/LOGO/CodeAntAI.png" alt="CodeAntAI_Logo" className="absolute bottom-0 left-0" />
            </div>
            <div className="lg:w-[50%] sm:w-full gap-4 flex flex-col justify-center items-center">
                <MainSigin />
            </div>
        </div>
    )
}
export default SigninPage;