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
    }

    render() {

        let style = this.props.style;
        let rules = getObjectFormat(style).map(rule=><Rule rule={rule} />);
        return (
            <div className="container">
                <div className="title">StyleExplorer</div>
                <div className="rules">
                    {rules}
                </div>
            </div>
        );
    }
}

export default StyleExplorer;
