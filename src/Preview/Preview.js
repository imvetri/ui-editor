// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


import style from "./Preview.css";

import DynamicComponent from "../DynamicComponent/DynamicComponent";
import {validate} from "./validate";

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        try{
            validate(this.props.components)
        }
        catch(e){
            console.error(e);
        }
        return (
            <div className={style.box}>
                <h4>Preview</h4>
                {this.props.components.map(component=><DynamicComponent key={component.id} component={component}/>)}
            </div>
        );
    }

}

export default Preview;