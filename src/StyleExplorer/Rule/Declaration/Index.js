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
            declarations: [...declarations.slice(0,index),{property:"addProperty", value: ""},...declarations.slice(index,declarations.length)]
        })
    }

    onEdit(previousValue, currentValue, index) {
        let declarations = this.state.declarations;
        declarations[index].property = currentValue;
        this.setState({declarations:declarations});

        if(declarations[index].value){
            this.props.onEdit(declarations)
        }
    }

    onValueEdit(previousValue, currentValue, index) {
        let declarations = this.state.declarations;
        declarations[index].value = currentValue;
        this.setState({declarations:declarations})
        this.props.onEdit(declarations)
    }

    render() {

        return (
            <div className="declaration">
                {this.state.declarations.map((declaration,index)=> <div>
                                <Property 
                                    index={index}
                                    key={Math.ceil(Math.random() * 1000)} 
                                    value={declaration.property}
                                    onEdit={this.onEdit.bind(this)} />
                                    :
                                <Value 
                                    key={Math.ceil(Math.random() * 1000)} 
                                    index={index} 
                                    value={declaration.value} 
                                    onNewdeclaration={this.addNewDeclaration.bind(this)}
                                    onEdit={this.onValueEdit.bind(this)}/>
                </div>)}
            </div>
        );
    }
}

export default Declaration;
