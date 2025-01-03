import MainList from "./Components/MainList/MainList";
import Navbar from "./Components/Navbar/Navbar";
import SNavbar from "./Components/Navbar/SNavbar";

function MainPage() {
    return (
        <div className="w-screen h-screen flex lg:flex-row md:flex-col sm:flex-col bg-[#FAFAFA] select-none text-[#181D27] font-Inter">
            <Navbar />
            <div className="w-full lg:hidden md:block sm:block">
                <SNavbar />
            </div>
            <MainList />
        </div>
    )
}
export default MainPage;