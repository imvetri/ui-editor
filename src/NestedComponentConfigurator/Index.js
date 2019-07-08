// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"

class NestedComponentConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        debugger;
        return (
            <div className={style.event}>
                {this.props.childComponents.map(component=><input type="text" value={component}/>)}
            </div>
        );
    }
}

export default NestedComponentConfigurator;
