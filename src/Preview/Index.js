// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "../DynamicComponent";

// Utilities.

import { writeComponent } from "../utilities/localStorage";

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {}
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
                    console.log("Drag Over");
                    // Show drop points.
                    e.preventDefault();
                }).bind(this),
                onDrop: ((e)=>{
                    // remove drop points.
                    console.log("DROPPED")
                    e.preventDefault();
                    var parent = this.props.component;
                    var child = e.dataTransfer.getData("component-name");
                    var uuid = e.target.getAttribute("data-uuid");
                    parent.idMarkup = parent.idMarkup.replace(`"${uuid}">`,`"${uuid}"><${child}/>`)
                    writeComponent(parent, true);
                }).bind(this)
            }
        })
    }

    setToEditMode() {
        // Set overlay.
        this.setState({
            events: {
                onMouseOver: ()=>{
                    // Show edit tools.
                    console.log("MOUSE OVER")
                },
                onMouseLeave: ()=>{
                    // Remove edit tools.
                    console.log("MOUSE LEAVE")
                }
            }
        })
    }

    interactiveMode(){
        this.setState({
            events: {}
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
            </div>
        );
    }

}

export default Preview;