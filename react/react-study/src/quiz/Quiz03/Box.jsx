function Box({title, detail}) {
    //props : 컴포넌트에서 사용할 매개변수
    return (
        <div>
            <h1>{title}</h1>
            <h2>{detail}</h2>
        </div>
    )
}

export default Box;