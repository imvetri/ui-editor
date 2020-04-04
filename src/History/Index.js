import React, { Component } from 'react';

import { popHistory } from "../utilities/Storage";

import "./Style.css";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshToPrevious() {
        popHistory();
    }

    render() {
        return (
            <ul>
                <button onClick={this.refreshToPrevious.bind(this)}>Go back</button>
            </ul>
        );
    }
}

export default History;
