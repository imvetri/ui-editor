// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import style from "./Style.css"
class PropConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: this.props.property.property ? this.props.property.property : "",
            value: this.props.property.value ? this.props.property.value : ""
        }
    }

    updateValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    publishProps() {
        this.props.onSave({
            property: this.state.property,
            value: this.state.value,
            index: this.props.index
        })
    }

    reset(){
        this.setState({
            value: ""
        })
    }

    render() {

        return (
            <div className={style.event}>
                <input type="text" value={this.state.property} disabled title="Event published from child. Read only"/>
                <textarea onChange={this.updateValue.bind(this)} value={this.state.value} placeholder="Enter value" title="Value can be a literal / object / a function"/>
                <div>
                    <button onClick={this.reset.bind(this)} title="Resets the code to empty">Reset</button>
                    <button onClick={this.publishProps.bind(this)} >Save</button>
                </div>
            </div>
        );
    }
}

export default PropConfigurator;
