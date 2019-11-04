// Libraries.

import React, { Component } from "react";

import "./style.css";

class DraggableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: JSON.parse(localStorage.getItem(`ui-editor-settings-draggable-component-${this.props.children.type.name}`)) || {
                position: "fixed",
                top: "30px",
                left: "200px"
            }
        }
    }

    moveDiv(e){

        let state = JSON.parse(JSON.stringify(this.state));
        state.style.top = e.pageY +"px"
        state.style.left = e.pageX +"px"
        this.setState({
            style : state.style
        })

        localStorage.setItem(`ui-editor-settings-draggable-component-${this.props.children.type.name}`,JSON.stringify(state.style));
    }

    render() {
        return (
            <div draggable="true" id="move" onDragEnd={this.moveDiv.bind(this)} style={this.state.style} >
                <span title="Move" className="move-handle">
                    <i className="fa fa-arrows-alt"></i>
                </span>
                {this.props.children}
            </div>
        );
    }

}

export default DraggableComponent;