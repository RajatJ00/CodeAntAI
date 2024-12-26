function Menu(props) {
    return (
        <>
            {props.itemdata.map((value, index) => (
                <div className="w-[210px] h-[48px] flex flex-col group rounded-lg py-[2px]">
                    <a key={index} href="/mainpage" className="w-[211px] h-[44px] px-[14px] gap-2 flex text-center items-center rounded-lg group-hover:text-white bg-white group-hover:bg-[#1570EF] text-[#414651] cursor-pointer border-2 border-[#FFFFFF1F] shadow-[#0A0D120D] group-hover:drop-shadow hover:shadow group-hover:shadow-[inset_0_-2px_0_0_#0A0D120D] shadow-[inset_0_0_0_-1px_#0A0D122E]">
                        <span className="w-6 h-6">{value.icon}</span>
                        <p className="text-base font-semibold">{value.title}</p>
                    </a>
                </div>
            ))}
        </>
    )
}
export default Menu;