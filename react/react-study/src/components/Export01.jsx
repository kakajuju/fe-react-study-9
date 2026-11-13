import menus from "../data/mydata01";

// let menus = export default menus;

// import abc from "../data/mydata01";
// let abc = export default menus;

import {menu4, menu5, menu6} from '../data/mydata02';
// import {menu1, menu2, menu3} from "../data/mydata01";
import {menu1, menu3} from "../data/mydata01";

function Export01() {

    return(
        <div>
            <h1>Export01</h1>
            <h2>{menus}</h2>

            <h2>{menu1}</h2>
            {/* <h2>{menu2}</h2> */}
            <h2>{menu3}</h2>

            <h2>{menu4}</h2>
            <h2>{menu5}</h2>
            <h2>{menu6}</h2>
        </div>
    )
}

export default Export01;