// Libraries.

import React, { Component } from "react";

import "./style.css";

import { wrapTool } from "../utilities/wrapTool";

import DynamicComponent from "../DynamicComponent";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {}
        }
    }

    setToEditMode() {
        // Set overlay.
        this.setState({
            events: {
                onMouseOver: this.showHover.bind(this),
                onClick: this.showTools.bind(this)
            }
        })
    }

    setToInteractMode() {
        // Remove overlay.
        this.setState({
            events: {}
        })
    }

    showHover(e){
        wrapTool(e)
        e.stopPropagation();
        console.log(e)
    }

    showTools(e){
        // TODO : Change the markup to show the element.
        e.target.outerHTML = `<span><i className="fas fa-save"></i>${e.target.outerHTML}</span>`
        debugger;
    }

    render() {

        // Helps to rerender when changes to markup/events are made to the component and preview them.
        let randomKey = this.props.component.id*(~~(Math.random()*10));
        return (
            <div className="container preview">
                <div className="title">
                    Preview
                </div>
                <div>
                    <button onClick={this.setToEditMode.bind(this)}><i className="fas fa-file-export"></i>Edit</button>
                    <button onClick={this.setToInteractMode.bind(this)}><i className="fas fa-file-export"></i>Interact</button>
                </div>
                <DynamicComponent key={randomKey} component={this.props.component} events={this.state.events}/>
            </div>
        );
    }

}

export default Preview;