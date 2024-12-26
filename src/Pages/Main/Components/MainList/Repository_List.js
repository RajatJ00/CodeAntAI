import { HiOutlineDatabase } from "react-icons/hi";

function Repository_List(props) {
    return (
        <div className=" overflow-y-scroll">
            {props.repository_data.map((value, index) => (
                <div key={index} className="h-[108px] border-t border-[#D5D7DA] px-6 py-6 flex flex-col gap-3 hover:bg-[#F5F5F5]">
                    <div className="flex gap-2">
                        <p className="font-medium text-xl/6">{value.title}</p>
                        <span className="w-fit h-fit rounded-full border border-[#B2DDFF] py-[2px] pr-[10px] pl-2 gap-1 bg-[#EFF8FF] text-sm items-center text-[#175CD3]">{value.type}</span>
                    </div>
                    <div className="flex items-center gap-10 font-normal text-base">
                        <p className="flex items-center gap-2">{value.language}<div className="w-2 h-2 bg-[#1570EF] rounded-full"></div></p>
                        <p className="flex items-center gap-2">
                            <span><HiOutlineDatabase /></span>{value.size}
                        </p>
                        <p className="">{value.updated}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Repository_List;