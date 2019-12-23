// Libraries.

import React, { Component } from "react";

import "./style.css";

import { deleteSubComponent } from "./getComponentMarkup";
import { writeComponent } from "../utilities/localStorage";

class FocusBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    getElement(uuid){
        var idMarkup = this.props.component.idMarkup;
        /**
         * 1. Find index of first < before uuid
         * 2. Find index of current tag />
         * 3. Remove the string.
         * 4. Place it
         */
    }

    moveChildUp(e){
        /**
         * 1. get target uuid
         * 2. get element containing uuid
         */
        var targetUuid = target.getAttribute("data-uuid");

        // Insert the child before the previous child. 

    }
    moveChildDown(){

        // Remove the child.
        // Insert the child after the next child. 

    }
    deleteChild(){
        debugger;
        var target = this.props.target;
        var targetUuid = `data-uuid="${target.getAttribute("data-uuid")}"`;
        var tag = target.getAttribute("data-name");
        this.props.component.idMarkup = deleteSubComponent(this.props.component.idMarkup, targetUuid, tag);
        writeComponent(this.props.component, true)
        this.props.refresh();
        // Remove the chil d.
        // Insert the child after the next child. 
    }

    render() {
        let coordinates = this.props.coordinates;
        let style = {
            width:coordinates.width||0, 
            height:coordinates.height||0, 
            position: "fixed", 
            top: coordinates.y||0, 
            left:coordinates.x||0,
            display: this.props.hide? "none": "block"
        }
        return (
            <div className="ui-overlay" style={style}>
                <div className="focus-bar">
                    {/* <span title="Move" className="move-handle">
                        <i className="fa fa-arrows-alt"></i>
                    </span> */}
                    <span title="Move up">
                        <button onClick={this.moveChildUp.bind(this)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </span>
                    <span title="Move down">
                        <button onClick={this.moveChildDown.bind(this)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                    </span>
                    {/* <span title="Edit">
                        <i className="fa fa-pencil-alt"></i>
                    </span> */}
                    {/* <span title="Duplicate">
                        <i className="fa fa-clone"></i>
                    </span> */}
                    <span title="Delete">
                        <button onClick={this.deleteChild.bind(this)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </span>
                </div>
                <div className="highlights">
                    <div className="focus">
                    </div>
                </div>
            </div>
        )
    }

}

export default FocusBarComponent;