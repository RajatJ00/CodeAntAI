function InfoSignin(props) {
    return (
        <div className=" flex flex-col mt-7 items-center gap-4 sm:px-4">
            {props.signindata.map((value, index) => (
                <a key={index} href="/mainpage" className="lg:w-[446px] sm:w-[376px] h-[57.59px] font-semibold flex items-center justify-center text-base border border-[#D8DAE5] rounded-lg gap-4">
                    <img src={value.img} alt={value.title} className="w-[25px] h-fit" />
                    <p>{value.title}</p>
                </a>
            ))}
        </div>
    )
}
export default InfoSignin;