// Libraries.

import React, { Component } from "react";

// Components.

import Rule from "./Rule";

import {getObjectFormat, convertToStyleString} from "./util";
// Styles.

import "./Style.css";

class StyleExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.rules = getObjectFormat(this.state.component.style);
    }

    addRule(){
        let newRules = Array.from(this.state.rules);
        newRules.unshift({
            selector: "newClass",
            declarations:[{
                property: "newProperty",
                value: ""
            }]
        })
        this.setState({
            rules: newRules
        })
    }

    ruleUpdate(rule, index) {

        var rules = this.state.rules;
        rules[index] = rule;

        var components = JSON.parse(localStorage.getItem("ui-editor"));
        var component = components.find(component=>component.name === this.state.component.name);

        // convert rules to a style string.
        component.style = convertToStyleString(rules);
        
        localStorage.setItem("ui-editor", JSON.stringify(components));
        this.props.onEdit();
    }

    render() {

        let rules = this.state.rules.map((rule,index)=><Rule key={Math.ceil(Math.random() * 1000)} index={index} rule={rule} onUpdate={this.ruleUpdate.bind(this)} />);
        return (
            <div className="container">
                <div className="title">StyleExplorer                
                    <button onClick={this.addRule.bind(this)}>+</button>
                </div>
                {rules}
            </div>
        );
    }
}

export default StyleExplorer;
