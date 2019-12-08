// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Property extends Component {
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
        if(this.props.value!==this.state.value){
            // then selector name changed
            this.props.onEdit(this.props.value, this.state.value, this.props.index)
        }
    }

    render() {
        let autoFocus = this.state.value.includes("addProperty")? "autoFocus": "";
        return  <input 
                    type="text" 
                    value={this.state.value}
                    autoFocus={autoFocus}
                    onBlur={this.valueChanged.bind(this)} 
                    onChange={this.updateSelector.bind(this)}/>
    }
}

export default Property;
