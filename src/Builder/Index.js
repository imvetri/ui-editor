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
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }
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
            <Div mode={this.state.mode} state={this.state} index={0}key={Math.ceil(Math.random() * 1000)} onDrawFinish={this.DivonDrawFinish.bind(this)}  onDelete={this.DivonDelete.bind(this)} onResizeFinish={this.DivonResizeFinish.bind(this)} onMoveFinish={this.DivonMoveFinish.bind(this)}></Div>
        </div>
        )
    }

}

export default Builder;