import { HiOutlineHome, HiOutlineCode, HiOutlineCog } from "react-icons/hi";
// HiOutlineDatabase
import { HiOutlineCloud } from "react-icons/hi2";
import { MdOutlineLibraryBooks } from "react-icons/md";

const menu_item = [
    {
        title: "Repositories",
        icon: <HiOutlineHome className="w-full h-full" />
    },
    {
        title: "AI Code Review",
        icon: <HiOutlineCode className="w-full h-full" />
    },
    {
        title: "Cloud Security",
        icon: <HiOutlineCloud className="w-full h-full" />
    },
    {
        title: "How to Use",
        icon: <MdOutlineLibraryBooks className="w-full h-full" />
    },
    {
        title: "Setting",
        icon: <HiOutlineCog className="w-full h-full" />
    }
]
export default menu_item;