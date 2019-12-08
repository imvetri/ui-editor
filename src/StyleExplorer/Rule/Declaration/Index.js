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

    onEdit(previousValue, currentValue, index){
        let declarations = this.state.declarations;
        let newObj = {};
        newObj[currentValue] = declarations[index][previousValue]
        declarations[index] = newObj;
        this.setState({declarations:declarations})
        this.props.onEdit(declarations)
    }

    onValueEdit(previousValue, currentValue, index){
        let declarations = this.state.declarations;
        let key = Object.keys(declarations[index])[0];
        declarations[index][key] = currentValue;
        this.setState({declarations})
        this.props.onEdit(declarations)

    }

    render() {

        return (
            <div className="declaration">
                {this.state.declarations.map((obj,index)=> <div>
                                <Property 
                                    index={index}
                                    key={Math.ceil(Math.random() * 1000)} 
                                    value={Object.keys(obj)[0]}
                                    onEdit={this.onEdit.bind(this)} />
                                    :
                                <Value 
                                    key={Math.ceil(Math.random() * 1000)} 
                                    index={index} 
                                    value={Object.values(obj)[0]} 
                                    onNewdeclaration={this.addNewDeclaration.bind(this)}
                                    onEdit={this.onValueEdit.bind(this)}/>
                </div>)}
            </div>
        );
    }
}

export default Declaration;
