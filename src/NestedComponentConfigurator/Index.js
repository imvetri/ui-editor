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

        return (
            <div className={style.event}>
                <input type="text" value={this.state.name} title="Event Name"/>
            </div>
        );
    }
}

export default NestedComponentConfigurator;
