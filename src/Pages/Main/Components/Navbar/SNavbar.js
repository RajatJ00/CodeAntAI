import { useState } from "react";
import CodeAntAI from "../../../HOC/CodeAntAI";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import Closebtn from "./Closebtn";

function SNavbar() {
    const [icon, setIcon] = useState(false);

    return (
        <div className="flex justify-between items-center bg-white p-2">
            <CodeAntAI />
            <button onClick={() => setIcon(!icon)} className="p-2">
                {icon ? <><HiOutlineX /><Closebtn /></> : <HiOutlineMenu />}
            </button >
        </div >
    )
}
export default SNavbar;