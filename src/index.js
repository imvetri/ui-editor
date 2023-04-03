// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

import Flow from "./Flow";

class Index extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Flow/> 
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));