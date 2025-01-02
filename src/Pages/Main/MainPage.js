import MainList from "./Components/MainList/MainList";
import Navbar from "./Components/Navbar/Navbar";
import SNavbar from "./Components/Navbar/SNavbar";

function MainPage() {
    return (
        <div className="w-screen h-screen flex bg-[#FAFAFA] select-none text-[#181D27] font-Inter">
            <Navbar />
            <div className="lg:hidden md:hidden sm:block fixed inset-0 bg-black/30">
                <SNavbar />
            </div>
            <MainList />
        </div>
    )
}
export default MainPage;