// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


import style from "./Preview.css";

import DynamicComponent from "../DynamicComponent/DynamicComponent";

class Preview extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={style.box}>
                {this.props.components.map(component=><DynamicComponent component={component}/>)}
            </div>
        );
    }

}

export default Preview;