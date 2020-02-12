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
            this.props.onEdit(this.props.value, this.state.value, this.props.index);
        }
    }

    addNew(e){
        if(e.key== "Enter"){
            this.props.onNewdeclaration(this.props.index);
        }
    }

    selectText(e){
        e.currentTarget.select();
    }
    
    render() {
        return <input type="text" 
                value={this.state.value} 
                onBlur={this.valueChanged.bind(this)} 
                onChange={this.updateSelector.bind(this)}
                onFocus={this.selectText.bind(this)}
                onKeyPress={this.addNew.bind(this)}/>
    }
}

export default Value;
