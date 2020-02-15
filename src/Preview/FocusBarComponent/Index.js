// Libraries.

import React, { Component } from "react";

import "./style.css";

import { deleteComponent, moveComponentUp, moveComponentDown } from "../../utilities/Component";

class FocusBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    deleteChild(){

        var tag = this.props.target.getAttribute("data-name");
        var uuid = this.props.target.getAttribute("data-uuid")
        deleteComponent(this.props.component, tag, Number(uuid));
        this.props.refresh();
    }

    moveUp(){

        var tag = this.props.target.getAttribute("data-name");
        var uuid = this.props.target.getAttribute("data-uuid")
        moveComponentUp(this.props.component, tag, Number(uuid));
        this.props.refresh();
    }

    moveDown(){

        var tag = this.props.target.getAttribute("data-name");
        var uuid = this.props.target.getAttribute("data-uuid")
        moveComponentDown(this.props.component, tag, Number(uuid));
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
                        <button onClick={this.moveUp.bind(this)}>
                            <i className="fa fa-arrow-up fa-xs"></i>
                        </button>
                    </span>
                    <span title="Move down">
                        <button onClick={this.moveDown.bind(this)}>
                            <i className="fa fa-arrow-down fa-xs"></i>
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
                            <i className="fa fa-trash fa-xs"></i>
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