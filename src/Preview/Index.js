// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "../DynamicComponent";
import FocusBarComponent from "../FocusBarComponent";

// Utilities.

import { createComponent } from "../utilities/Component";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {},
            coordinates:{},
            target: {}
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
                        events:{}
                    })
                }).bind(this)
            }
        })
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
                        coordinates:{}
                    })
                    console.log("MOUSE LEAVE")
                },
                onClick: ((e)=>{
                    debugger;
                    // remove targetChild
                    e.target.classList.remove("targetChild");

                    // untill it finds the parent with data-uuid attribute
                    let target =  e.target;
                    
                    while(!target.getAttribute("data-name")){
                        target = target.parentElement;
                    }

                    this.setState({
                        coordinates: e.target.getBoundingClientRect(),
                        events: {},
                        target: target
                    })
                    // show edit tools
                }).bind(this)
            }
        })
    }

    interactiveMode(){
        this.setState({
            events: {}
        })
    }

    refresh( ){
        this.setState({
            events:{},
            hideTool: true
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
                <DynamicComponent key={randomKey} component={this.props.component} events={this.state.events}/>
                <FocusBarComponent 
                    coordinates={this.state.coordinates} 
                    component={this.props.component} 
                    target={this.state.target}
                    refresh={this.refresh.bind(this)}
                    hide={this.state.hideTool}/>
            </div>
        );
    }

}

export default Preview;