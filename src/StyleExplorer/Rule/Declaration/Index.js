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
        index = index+1;
        this.setState({
            declarations: [...declarations.slice(0,index),{addProperty:""},...declarations.slice(index,declarations.length)]
        })
    }

    render() {

        return (
            <div className="declaration">
                {this.state.declarations.map((obj,index)=> <div>
                                <Property key={Math.ceil(Math.random() * 1000)} value={Object.keys(obj)[0]}/>:
                                <Value key={Math.ceil(Math.random() * 1000)} index={index} value={Object.values(obj)[0]} onNewdeclaration={this.addNewDeclaration.bind(this)}/>
                </div>)}
            </div>
        );
    }
}

export default Declaration;
