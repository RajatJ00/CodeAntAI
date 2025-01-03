import Menu from "../Navbar/Menu";
import menu_item from "../Navbar/menu_itemsdata";
import b_menu_item from "../Navbar/b_menu_itemsdata";

function Closebtn() {
    return (
            <div className="inset-0 h-screen bg-black/30 fixed top-12">
                <div className=" bg-white">
                    <Menu itemdata={menu_item} />
                    <Menu itemdata={b_menu_item} />
                </div>
            </div>
    )
}
export default Closebtn;