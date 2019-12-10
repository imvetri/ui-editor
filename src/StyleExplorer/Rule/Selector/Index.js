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

    selectText(e){
        e.currentTarget.select();
    }

    render() {
        let autoFocus = this.state.name.includes("newClass")? "autoFocus": "";
        return <input 
                        type="text" 
                        value={this.state.name} 
                        autoFocus={autoFocus}
                        onBlur={this.valueChanged.bind(this)} 
                        onFocus={this.selectText.bind(this)}
                        onChange={this.updateSelector.bind(this)}/>
    }
}

export default Selector;
