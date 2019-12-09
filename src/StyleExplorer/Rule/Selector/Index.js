// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    updateSelector(e){
        this.setState({
            name: e.currentTarget.value
        })
    }

    valueChanged(){
        if(this.props.name!==this.state.name){
            // then selector name changed
            this.props.onEdit(this.state.name)
        }
    }

    render() {
        return <input type="text" value={this.state.name} onBlur={this.valueChanged.bind(this)} onChange={this.updateSelector.bind(this)}/>
    }
}

export default Selector;
