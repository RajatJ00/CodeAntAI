function UserNav() {
    return(
        <div className="flex text-center items-center flex-col gap-5 py-6">
            <div className="flex items-center gap-3 text-[#181D27]">
                <img src="Images/LOGO/codeantai_icon.png" alt="Logo" className="w-7 h-fit " />
                <p className="text-[24px]/[26.4px] font-normal">CodeAnt AI</p>
            </div>
            <select className="lg:w-[202px] sm:w-full border border-[#D5D7DA] rounded-xl px-5 py-3 overflow-ellipsis" >
                <option value="User">UserUserUserUserUser</option>
            </select>
        </div>
        )
}
export default UserNav;