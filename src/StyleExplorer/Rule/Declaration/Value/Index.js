// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Value extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateSelector(e){
        this.setState({
            value: e.currentTarget.value
        })
    }

    valueChanged(){
        if(this.props.name!==this.state.value){
            // then selector name changed
        }
    }

    render() {
        return <input type="text" value={this.state.value} onBlur={this.valueChanged.bind(this)} onChange={this.updateSelector.bind(this)}/>
    }
}

export default Value;
