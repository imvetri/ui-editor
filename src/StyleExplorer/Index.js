// Libraries.

import React, { Component } from "react";

// Components.

import Rule from "./Rule";

import {getObjectFormat} from "./util";
// Styles.

import "./Style.css";

class StyleExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
        this.state.rules = getObjectFormat(this.state.style);
    }

    addRule(){
        let newRules = Array.from(this.state.rules);
        newRules.unshift({
            "a":{
                a: "a"
            }
        })
        this.setState({
            rules: newRules
        })
    }

    ruleUpdate() {
        this.props.onEdit();
    }

    render() {

        let rules = this.state.rules.map((rule,index)=><Rule key={index} rule={rule} onUpdate={this.ruleUpdate.bind(this)}/>);
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
