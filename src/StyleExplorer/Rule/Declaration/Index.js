// Libraries.

import React, { Component } from "react";

import "./Style.css";

// Components.

import Property from "./Property";
import Value from "./Value";

class Declaration extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    addNewDeclaration(index) {
        let declarations = this.state.declarations;
        this.setState({
            declarations: [...declarations.slice(0,index),{},...declarations.slice(index,declarations.length)]
        })
    }

    render() {

        return (
            <div className="declaration">
                {this.state.declarations.map((obj,index)=> <div><Property value={Object.keys(obj)[0]}/>:<Value index={index} value={Object.values(obj)[0]} onNewdeclaration={this.addNewDeclaration.bind(this)}/></div>)}
            </div>
        );
    }
}

export default Declaration;
