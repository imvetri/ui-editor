// Libraries.

import React, { Component } from "react";

import "./style.css";

class FocusBarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui-overlay">
                <div className="focus-bar">
                    <span title="Move" className="move-handle">
                        <i className="fa fa-arrows-alt"></i>
                    </span>
                    <span title="Select Parent">
                        <i className="fa fa-arrow-up"></i>
                    </span>
                    <span title="Edit">
                        <i className="fa fa-pencil-alt"></i>
                    </span>
                    <span title="Duplicate">
                        <i className="fa fa-clone"></i>
                    </span>
                    <span title="Delete">
                        <i className="fa fa-trash"></i>
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