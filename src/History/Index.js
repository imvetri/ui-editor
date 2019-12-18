// Libraries.

import React, { Component } from "react";

import "./style.css";

class History extends Component {
    constructor(props) {
        super(props);
    }

    refreshToPrevious(){
        
    }

    refreshToNext(){

    }

    render() {

        return (
            <div className="container preview">
                <div className="title">
                    History
                </div>
                <div>
                    <button onClick={this.refreshToPrevious.bind(this)}>Go back</button>
                    <button onClick={this.refreshToNext.bind(this)}>Go forward</button>
                </div>
            </div>
        );
    }

}

export default History;