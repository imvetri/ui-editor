// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


// Components.


import Markup from './Markup';
import Style from  "./Style";
import State from "./State";
import { Excalidraw } from "@excalidraw/excalidraw";





// Constants

class Index extends Component {
    constructor(props) {
        super(props);
        let components = [];
        this.state = {
            components: components,
            component: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            }
        }

    }


    render() {
        const randomKey = Math.ceil(Math.random() * 1000);
        return (
            <div>
                <Markup markup={this.state.component.markup} key={randomKey}></Markup>
                <Style style={this.state.component.style} key={randomKey}></Style>
                <State state={this.state.component.state} key={randomKey}></State>
                <div style={{ height: "100vh", width: "50vw" }}>
                    <Excalidraw />
                </div>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));