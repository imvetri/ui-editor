// Libraries.

import React, { Component } from "react";

import "./style.css";

class DraggableComponent extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = JSON.parse(localStorage.getItem(`ui-editor-settings-draggable-component-${this.props.children.props.title}`)) || {
            style:  {
                position: "fixed",
                top: "30px",
                left: "200px"
            },
            minimised: false
        }
        this.state.draggable= "false"
    }

    moveDiv(e){
        if(e.target.id==="move"){
            let state = JSON.parse(JSON.stringify(this.state));
            state.style.top = e.pageY +"px"
            state.style.left = e.pageX +"px"
            this.setState({
                style : state.style
            },()=>{
                localStorage.setItem(`ui-editor-settings-draggable-component-${this.props.children.props.title}`,JSON.stringify(this.state));
            })    
        }
    }

    toggleMinimiseMaximise(e) {
        this.setState({
            minimised: !this.state.minimised
        },()=>{
            localStorage.setItem(`ui-editor-settings-draggable-component-${this.props.children.props.title}`,JSON.stringify(this.state));
        })
    }

    onMouseEnter() {
        this.setState({
            draggable:"true"
        })
    }

    onMouseLeave(){
        this.setState({
            draggable:"false"
        })
    }

    render() {

        
        return (
            <div draggable={this.state.draggable} id="move" onDragEnd={this.moveDiv.bind(this)} style={this.state.style} >
                <span title="Move" className="move-handle" onMouseDown={this.onMouseEnter.bind(this)} onMouseUp={this.onMouseLeave.bind(this)}>
                    <i className="fa fa-arrows-alt fa-xs"></i>
                </span>
                {
                    this.state.minimised ?                 
                    <span title="Minimise" className="maximise-handle" onClick={this.toggleMinimiseMaximise.bind(this)}>
                        <i className="fas fa-window-maximize fa-xs"></i>
                    </span>
                    :
                
                    <span title="Minimise" className="minimise-handle" onClick={this.toggleMinimiseMaximise.bind(this)}>
                        <i className="fas fa-window-minimize fa-xs"></i>
                    </span>
                }
                {
                    this.state.minimised ? 
                        <div className="container editor-tab">
                            <div className="title">{this.props.children.type.name}</div>
                        </div>
                        :
                        this.props.children 
                }
            </div>
        );
    }

}

export default DraggableComponent;