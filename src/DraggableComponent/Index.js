// Libraries.

import React, { Component } from "react";

import "./style.css";

class DraggableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                position: "fixed",
                top: "400px",
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
    }

    render() {

        return (
            <div draggable="true" id="move" onDragEnd={this.moveDiv.bind(this)} style={this.state.style} >
                {this.props.children}
            </div>
        );
    }

}

export default DraggableComponent;