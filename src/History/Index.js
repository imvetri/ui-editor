// Libraries.

import React, { Component } from "react";

import { popHistory } from "../utilities/Storage/localStorage";

import "./style.css";

class History extends Component {
    constructor(props) {
        super(props);
    }

    refreshToPrevious(){
        popHistory();
    }

    render() {

        return (
            <div className="container preview">
                <div className="title">
                    History
                </div>
                <div>
                    <button onClick={this.refreshToPrevious.bind(this)}>Go back</button>
                </div>
            </div>
        );
    }

}

export default History;