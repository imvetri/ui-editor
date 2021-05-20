// Libraries.

import React, { Component } from "react";

// Components

import Div from "./Div";
import Zoom from "./Zoom";

// Styles.

import "./style.css";

class Builder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "Draw"
        }
        
    }

    changeMode(e) {
        this.setState({
            mode: e.currentTarget.innerText
        })
    }

    render() {
        return (
        <div className="builder">
            <div className="toolBar">
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-pen"></i>Draw</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-arrows-alt"></i>Move</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-compress-arrows-alt"></i>Resize</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-trash-alt"></i>Delete</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-save"></i>Save</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-edit"></i>Edit</button>
                <button onClick={this.changeMode.bind(this)}><i class="fas fa-bolt"></i>Events</button>
            </div>
            <Div mode={this.state.mode}></Div>
            <Zoom/>
        </div>
        )
    }

}

export default Builder;