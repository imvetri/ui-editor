// Libraries.

import React, { Component } from "react";

import "./style.css";

import { deleteComponent } from "../utilities/Component";

class FocusBarComponent extends Component {
    constructor(props) {
        super(props);
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
        var tag = this.props.target.getAttribute("data-name");
        var uuid = this.props.target.getAttribute("data-uuid")
        deleteComponent(this.props.component, tag, uuid);
        this.props.refresh();
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