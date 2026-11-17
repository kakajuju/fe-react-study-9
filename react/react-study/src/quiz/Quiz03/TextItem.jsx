
// title =  , content = 
/* function TextItem(props) {    // props = {title=xxx content=xxx}

    return (
        <div className='textItem'>
            <p className='title'>제목 : {props.title}</p>
            <p>내용 : {props.content}</p>
        </div>
    )
}
 */

function TextItem({ title, content }) {    // props = {title=xxx content=xxx}

    return (
        <div className='textItem'>
            <p className='title'>제목 : {title}</p>
            <p>내용 : {content}</p>
        </div>
    )
}

export default TextItem;