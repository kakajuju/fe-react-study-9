//<Box text={arr[ 아침 ]} detail={detail[ 졸리다 ]} />
//  props = {text : '아침', detail : '졸리다'}

/* 
function Box(props) {
    //props : 컴포넌트에서 사용할 매개변수
    return (
        <div style={{ backgroundColor: 'lightgreen' }}>
            <h1>{props.text}</h1>
            <h2>{props.detail}</h2>
        </div>
    )
}
 */


// props = { text: '아침', detail: '졸리다' }
// let {text, detail} = { text: '아침', detail: '졸리다'}

let [ a, b, c ] = [ 10, 20, 30 ];


function Box({title, detail}) {
    //props : 컴포넌트에서 사용할 매개변수
    return (
        <div style={{ backgroundColor: 'lightgreen', margin:'10px' }}>
            <h1>{title}</h1>
            <h2>{detail}</h2>
        </div>
    )
}

export default Box;