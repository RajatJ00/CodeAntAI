import { HiOutlineRefresh, HiOutlineSearch, HiOutlinePlus } from "react-icons/hi";
import RepositoryList from "./Repository_List";
import repository_data from "./repository_data";

function MainList() {
    return (
        <div className="lg:w-[1198px] sm:w-full p-6 flex gap-2">
            <div className="w-full bg-white border border-[#E9EAEB] rounded-xl shadow-sm shadow-[#0A0D120D] flex flex-col">

                <div className="flex flex-col gap-5 px-7 py-5">
                    <div className="flex lg:flex-row sm:flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <h1 className="font-semibold text-2xl">Repositories</h1>
                            <p className="font-normal text-sm text-[#414651]">33 total repositories</p>
                        </div>
                        <div className="h-10 flex gap-3">
                            <button className="h-full group flex items-center rounded-lg border border-[#D5D7DA] px-[14px] py-[10px] gap-1 shadow-[0_1px_2px_0_#0A0D120D] group-hover:shadow-[inset_0_-2px_0_0_#0A0D120D]"><HiOutlineRefresh /> Refresh All</button>
                            <button className="h-full flex items-center rounded-lg border border-[#D5D7DA] px-[14px] py-[10px] gap-1 text-white bg-[#1570EF] border-[#FFFFFF1F] shadow-[#0A0D120D] group-hover:drop-shadow hover:shadow group-hover:shadow-[inset_0_-2px_0_0_#0A0D120D] shadow-[inset_0_0_0_-1px_#0A0D122E]"><HiOutlinePlus /> Add Repository</button>
                        </div>
                    </div>


                    <div className="w-[366px] h-[44px] flex items-center rounded-lg border border-[#D5D7DA] px-[14px] py-[10px] gap-1 shadow-[inset_0_1px_2px_0_#0A0D120D]">
                        <HiOutlineSearch />
                        <input type="search" className="" placeholder="Search Repositories" />
                    </div>
                </div>
                <RepositoryList repository_data={repository_data}/>
            </div>
        </div>
    )
}
export default MainList;