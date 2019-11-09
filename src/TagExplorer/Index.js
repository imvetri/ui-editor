// Libraries.

import React, { Component } from "react";

// Dependencies.

import { saveComponentsToWindow, getNestedComponents } from "../utilities/nestedComponentSetup";

// Components. 

import Tags from "./Tags";

// Styles.

import "./Style.css";


// Utils.

import { getNodeTree } from "../utilities/get-node-tree.js";

class TagExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {

        let nodeTree = this.props.node;

        return (
            <div className="container events-tab">
                <div className="title">TagExplorer</div>
                <div className="tags">
                    <Tags node={nodeTree}/>
                </div>
            </div>
        );
    }
}

export default TagExplorer;
