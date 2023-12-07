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
            },
            drawelements: []
        }
        window.count=0;
    }

    onExcalidrawChange (elements, appState, files) {
        count++;
        console.log(count)
        if(count>500){
            console.log(elements, appState, files)

            this.setState({drawelements: elements})
            count=0;
        }
    }

    onExcalidrawFinish() {
        console.log("FINISH")
    }

    onExcalidrawStart(){
        console.log("START")
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
                <div style={{ height: "90vh", width: "50vw" }}>
                    <Excalidraw onChange={this.onExcalidrawChange.bind(this)}
                                onPointerUp={this.onExcalidrawFinish.bind(this)}
                                onPointerDown={this.onExcalidrawStart.bind(this)}/>
                </div>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));