import { useState } from "react";
import CodeAntAI from "../../../HOC/CodeAntAI";
import Menu from "./Menu";
import menu_item from "./menu_itemsdata";
import b_menu_item from "./b_menu_itemsdata";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";


function SNavbar() {
    const [icon, setIcon] = useState(false);
    return (
        <div className="flex flex-col items-center bg-white">
            <div className="w-full flex justify-between items-center p-2 bg-white">
                <CodeAntAI />
                <button onClick={() => setIcon(!icon)} className="w-8 h-8">
                    {icon ? <HiOutlineMenu /> :
                        <div className="absolute inset-0">
                            <HiOutlineX />
                            <Menu itemdata={menu_item} />
                            <Menu itemdata={b_menu_item} />
                        </div>}
                </button>
            </div>
        </div>
    )
}
export default SNavbar;