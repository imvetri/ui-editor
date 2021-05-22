// Libraries.

import React, { Component } from "react";

// State

import State from "./Div/State";

// Components

import Div from "./Div";

// Styles.

import "./style.css";

class Builder extends Component {
    constructor(props) {
        super(props);
        this.state = State;
    }

    changeMode(e) {
        this.setState({
            mode: e.currentTarget.innerText
        })
    }

    DivonDrawFinish(e) {
        
        this.setState(e.state);
       
    }


    DivonMoveFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
        }
    }

    DivonResizeFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
        }
    }

    DivonDelete(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div.splice(e.index, 1);

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onModeChange ? this.props.onModeChange(e) : null;
        }
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
            <Div builderMode={this.state.mode} state={this.state} index={0}key={Math.ceil(Math.random() * 1000)} onDrawFinish={this.DivonDrawFinish.bind(this)}  onDelete={this.DivonDelete.bind(this)} onResizeFinish={this.DivonResizeFinish.bind(this)} onMoveFinish={this.DivonMoveFinish.bind(this)}></Div>
        </div>
        )
    }

}

export default Builder;