// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Tool from "./Tool";
import AcceptanceCriteria from "./AcceptanceCriteria";


class Index extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <AcceptanceCriteria />
                <Tool />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));