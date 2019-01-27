// Libraries.

import React, {Component} from "react";
import ReactDOM from "react-dom";

// Dependencies.


import style from "./index.css";

// Components.

import Components from "./components/Components";
import Elements from "./elements/Elements";
import StateReducerViewer from "/Users/vshanmugam/Desktop/state-reducer-viewer";

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={style.showBackground}>
                <Elements createMode={false}/>
                <StateReducerViewer/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById("index"));