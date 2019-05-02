// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


import style from "./style.css";

import DynamicComponent from "../DynamicComponent";
import {validate} from "./validate";

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        try{
            validate(this.props.component)
        }
        catch(e){
            console.error(e);
        }
        return (
            <div className={style.box}>
                <section className={style.preview}>
                    <h4>Preview</h4>
                    <DynamicComponent key={this.props.component.id} component={this.props.component}/>
                </section>
            </div>
        );
    }

}

export default Preview;