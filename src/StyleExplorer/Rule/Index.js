// Libraries.

import React, { Component } from "react";

import "./Style.css";

import Selector from "./Selector";
import Declaration from "./Declaration";

class Rule extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.rule);
    }

    updateSelector(selector){
        this.props.onUpdate({
            selector: selector,
            declarations: this.state.declarations
        }, this.props.index)
    }

    updateDeclarations(declarations){

        this.props.onUpdate({
            selector: this.state.selector,
            declarations: declarations
        },this.props.index)
    }

    render() {
        return (
            <div className="rules container">
                <Selector 
                    name={this.state.selector}
                    key={Math.ceil(Math.random() * 1000)}
                    onEdit={this.updateSelector}/>{" {"}
                <Declaration 
                    declarations={this.state.declarations} 
                    key={Math.ceil(Math.random() * 1000)}
                    onEdit={this.updateDeclarations.bind(this)}/>
                {"}"}
            </div>
        );
    }
}

export default Rule;
