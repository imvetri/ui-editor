// Libraries.

import React, { Component } from "react";

import "./style.css";

import DynamicComponent from "../DynamicComponent";

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
                onDragOver: function preventDefault(e){
                    console.log("Drag Over");
                    // Show drop points. 
                    e.preventDefault();
                },
                onDrop: function onDrop(e){
                    console.log("DROPPED")
                    // Remove drop points
                    e.preventDefault();
                    var child = e.dataTransfer.getData("component-name");
                    var uuid = e.target.getAttribute("data-uuid");
                    parent.idMarkup = parent.idMarkup.replace(`"${uuid}">`,`"${uuid}"><${child}/>`)
                }
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