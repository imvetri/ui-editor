import React, { Component } from 'react';
import { readData, writeData } from "../utilities/Storage"

// Components.
import Change from "./Change";

import "./Style.css";

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.history = readData("ui-editor-history");
    }

    updateHistory(data, index){
        this.state.history[index]= data;
        localStorage.setItem("ui-editor-history",JSON.stringify(this.state.history) );
    }

    render() {
        return (
            <ul>
                {this.state.history.map((item, index)=><Change index={index} item={item} itemChanged={this.updateHistory.bind(this)}/>)}
            </ul>
        );
    }
}

export default History;
