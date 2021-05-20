// Libraries.

import React, { Component } from "react";

// Styles.

import "./style.css";

class Zoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50
        }
    }

    zoomRangeChanged(e){
        this.setState({
            value:e.currentTarget.value 
        })
    }

    render() {
        return <input type="range" min="1" max="100" value={this.state.value} onChange={this.zoomRangeChanged.bind(this)}/>
    }

}

export default Zoom;