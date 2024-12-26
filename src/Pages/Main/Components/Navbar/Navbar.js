import Menu from "./Menu";
import UserNav from "./UserNav";
import menu_item from "./menu_itemsdata";
import b_menu_item from "./b_menu_itemsdata";

function Navbar() {
    return (
        <div className="w-1/6 h-screen bg-white flex flex-col items-center border-r border-[#E9EAEB] pt-6 justify-between">

            <div>
                <UserNav />
                <Menu itemdata={menu_item} />
            </div>

            <div className="flex flex-col pb-6">
                <Menu itemdata={b_menu_item} />
            </div>

        </div>
    )
}
export default Navbar;