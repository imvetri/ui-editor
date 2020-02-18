// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "./DynamicComponent";
import FocusBarComponent from "./FocusBarComponent";

// Utilities.

import { createComponent } from "../utilities/Component";
import { readComponent } from "../utilities/Storage/localStorage";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {},
            coordinates:{},
            target: {},
            component: this.props.component,
            mode: "INTERACTIVE",
            hideTool: true
        }
    }

    setToDropMode() {
        this.setState({
            events: {
                onDragOver: ((e)=>{
            
                    var previousDrop = document.querySelector(".dropPoint");
                    if(previousDrop)
                        previousDrop.classList.remove("dropPoint");
                    e.target.classList.add("dropPoint")
                    // Show drop points.
                    e.preventDefault();
                }).bind(this),
                onDrop: ((e)=>{
                    e.preventDefault();
                    var parent = this.props.component;
                    var child = e.dataTransfer.getData("component-name");
                    var uuid = e.target.getAttribute("data-uuid");
                    createComponent(parent, child, uuid)
                    this.setState({
                        events:{},
                        mode: "INTERACTIVE"
                    })
                }).bind(this)
            },
            mode: ""
        })
    }

    notInMarkup(name){
        return !this.state.component.markup.includes(name);
    }

    setToEditMode() {
        // Set overlay.
        this.setState({
            events: {
                // Show edit tools.
                onMouseOver: (e)=>{
                    if(e.target.getAttribute("data-uuid")>=0){
                        // Remove for preselected child.
                        let preSelectedchild = document.querySelector(".targetChild")
                        if(preSelectedchild){
                            preSelectedchild.classList.remove("targetChild")
                        }
                        // add class.
                        e.target.classList.add("targetChild")
                    }
                    console.log("MOUSE OVER")
                },
                // Remove edit tools.
                onMouseLeave: (e)=>{
                    let preSelectedchild = document.querySelector(".targetChild")
                    if(preSelectedchild){
                        preSelectedchild.classList.remove("targetChild")
                    }
                    this.setState({
                        coordinates:{},
                        events:{}
                    })
                    console.log("MOUSE LEAVE")
                },
                onClick: ((e)=>{
                    // remove targetChild
                    e.target.classList.remove("targetChild");

                    // untill it finds the parent with data-uuid attribute
                    let target =  e.target;
                    
                    while(this.notInMarkup(target.getAttribute("data-name") ) ){
                        
                        target = target.parentElement;
                    }

                    this.setState({
                        coordinates: target.getBoundingClientRect(),
                        target: target,
                        hideTool: false
                    })

                }).bind(this)
            },
            mode: ""
        })
    }

    interactiveMode(){
        this.setState({
            events: {},
            mode: "INTERACTIVE",
            hideTool: true
        })
    }

    refresh( ){
        this.setState({
            hideTool: true,
            component: readComponent(this.state.component.name)
        })
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
                    <button onClick={this.setToDropMode.bind(this)}><i className="fas fa-file-export"></i>Drop</button>
                    <button onClick={this.setToEditMode.bind(this)}><i className="fas fa-file-export"></i>Edit</button>
                    <button onClick={this.interactiveMode.bind(this)}><i className="fas fa-file-export"></i>Interact</button>
                </div>
                <DynamicComponent key={randomKey} component={this.state.component || this.props.component} mode={this.state.mode} events={this.state.events}/>
                <FocusBarComponent 
                    coordinates={this.state.coordinates} 
                    component={this.state.component || this.props.component} 
                    target={this.state.target}
                    refresh={this.refresh.bind(this)}
                    hide={this.state.hideTool}/>
            </div>
        );
    }

}

export default Preview;