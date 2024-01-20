// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";


// Components.


import Markup from './Markup';
import Style from  "./Style";
import State from "./State";





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
            },
            drawelements: []
        }
        window.count=0;
    }

    render() {
        const randomKey = Math.ceil(Math.random() * 1000);
        return (
            <div>
                {this.state.drawelements.map(element=>{
                    return <div className="centerItem">{React.createElement("div",{
                        className: "lalalala",
                        style:{
                            zIndex: 3,
                            width:element.width,
                            height:element.height,
                            position:"fixed",
                            top: element.x,
                            left:element.y,
                            backgroundColor: "red"
                        }

                    } )}</div>
                })}
                <Markup markup={this.state.component.markup} key={randomKey}></Markup>
                <Style style={this.state.component.style} key={randomKey}></Style>
                <State state={this.state.component.state} key={randomKey}></State>

            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));