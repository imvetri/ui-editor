// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.


import style from "./Index/index.css";

// Components.

import Elements from "./Elements/Elements";
import Preview from "./Preview/Preview";


import InputComponent1 from "./mock/InputComponent1";
import InputComponent2 from "./mock/InputComponent2";

let Components = [InputComponent1, InputComponent2];

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