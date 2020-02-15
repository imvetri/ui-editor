// Libraries.

import React, { Component } from "react";

// Components.

import Rule from "./Rule";

import {getObjectFormat, convertToStyleString} from "../../../utilities/Style";
import {readComponent, writeData, readData} from "../../../utilities/localStorage";

// Styles.

import "./Style.css";

class StyleExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);

        var component = readComponent(this.state.component.name);
        this.state.rules = getObjectFormat(component? component.style : "");
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

        // Delete if selector is empty
        if(!rule.selector){
            rule = undefined;
        }

        var rules = this.state.rules;
        rules[index] = rule;

        var components = readData("ui-editor");
        var component = readComponent(this.state.component.name);

        // convert rules to a style string.
        component.style = convertToStyleString(rules.filter(Boolean));
        
        writeData("ui-editor",components);
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

/**
 * Usage 
 *     
                    <DraggableComponent>
                        <StyleExplorer 
                            key={Math.ceil(Math.random() * 1000)} 
                            component={selectedComponent}
                            onEdit={this.updateStyles.bind(this)}
                            title="StyleExplorer"
                        />
                    </DraggableComponent>
 */