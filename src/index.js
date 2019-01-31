// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.


import style from "./Index/index.css";

// Components.

import Elements from "./Elements/Elements";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={style.showBackground}>
                <Elements createMode={false}/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));