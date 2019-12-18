// Libraries.

import React, { Component } from "react";

import "./style.css";

class History extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container preview">
                <div className="title">
                    History
                </div>
                <div>
                    <button>Undo</button>
                    <button>Redo</button>
                </div>
            </div>
        );
    }

}

export default History;