import MainList from "./Components/MainList/MainList";
import Navbar from "./Components/Navbar/Navbar";

function MainPage() {
    return (
        <div className="w-screen h-screen flex bg-[#FAFAFA] select-none text-[#181D27] font-Inter">
            <Navbar />
            <MainList />
        </div>
    )
}
export default MainPage;