// Libraries.

import React, { Component } from "react";

// Components

import Div from "./Div";

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
        /**
         * when Draw is on - Disable  - Move, Resize, Delete, copy, Save, Edit
         * when Select is on - Enable - Move, Resize, Delete, copy, Save, Edit
         * when Interact is on - 
         * 
         * There are three modes, Draw, select and interact. 
         * 
         * 1. Draw - When in draw mode, rectangles can be created
         * 2. Select - When in select mode, Rectangle can be selected. After selection it can be moved, resized, Deleted, copied, saved
         * 3. Event - Helps to add event interaction
         * 4. Interact - Helps to preview the changes.
         */
        return (
        <div className="builder">
            <div className="toolBar">
                <button className={this.state.mode==="Draw"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-pen"></i>Draw</button>
                <button className={this.state.mode==="Select"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-check"></i>Select</button>
                <button className={this.state.mode==="Move"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-arrows-alt"></i>Move</button>
                <button className={this.state.mode==="Resize"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-compress-arrows-alt"></i>Resize</button>
                <button className={this.state.mode==="Delete"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-trash-alt"></i>Delete</button>
                <button className={this.state.mode==="Copy"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-copy"></i>Copy</button>
                <button className={this.state.mode==="Save"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-save"></i>Save</button>
                <button className={this.state.mode==="Edit"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-edit"></i>Edit</button>
                <button className={this.state.mode==="Events"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-bolt"></i>Events</button>
                <button className={this.state.mode==="Interact"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-bolt"></i>Interact</button>
            </div>
            <Div mode={this.state.mode}></Div>
        </div>
        )
    }

}

export default Builder;