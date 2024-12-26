function MainCard(props) {
    return (
        <>
            {props.maincard.map((value, index) => (
                <div key={index}>
                    <h1>{value.number}</h1>
                    <p className="font-normal">{value.text}</p>
                </div>))}
        </>
    )
}
export default MainCard;