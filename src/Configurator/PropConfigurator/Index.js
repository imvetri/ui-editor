// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import {updateValue, reset} from "./Reducer";

import style from "./Style.css"
class PropConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: this.props.property.property ? this.props.property.property : "",
            value: this.props.property.value ? this.props.property.value : ""
        }
    }

    publishProps() {
        this.props.onSave({
            property: this.state.property,
            value: this.state.value,
            index: this.props.index
        })
    }

    render() {

        return (
            <div className={style.event}>
                <input type="text" value={this.state.property} disabled title="Event published from child. Read only"/>
                <textarea onChange={updateValue.bind(this)} value={this.state.value} placeholder="Enter value" title="Value can be a literal / object / a function"/>
                <div>
                    <button onClick={reset.bind(this)} title="Resets the code to empty">Reset</button>
                    <button onClick={this.publishProps.bind(this)} >Save</button>
                </div>
            </div>
        );
    }
}

export default PropConfigurator;
