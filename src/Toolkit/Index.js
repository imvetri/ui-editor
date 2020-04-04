// Libraries.

import React, { Component } from "react";

import Assets from "../Assets";
import Export from "../Export";

import { popHistory } from "../utilities/Storage";

import "./style.css";

class Toolkit extends Component {
    constructor(props) {
        super(props);
    }

    refreshToPrevious(){
        popHistory();
    }

    render() {

        return (
            <div className="container toolkit">
                <div>
                    <div className="title">
                        History
                    </div>
                    <div>
                        <button onClick={this.refreshToPrevious.bind(this)}>Go back</button>
                    </div>
                </div>
                <Assets />
                <Export />
            </div>
        );
    }

}

export default Toolkit;