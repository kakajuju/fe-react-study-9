


//호출부 : 
// function ColorBox(props) {
function ColorBox(bgColor) {
    return (
        <div className='box' style={{ backgroundColor: bgColor }}></div>
    )
}

export default ColorBox;