import { useState } from 'react';

let text = [ '하나', '둘', '셋' ];
function Quiz02() {

    let [ count, setCount ] = useState(0);        // count = 0;

    return (
        <div>
            <p>{text[count % text.length]}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>변경버튼</button>
        </div>
    )
}
export default Quiz02;