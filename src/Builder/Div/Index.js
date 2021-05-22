// Libraries.

import React, { Component } from "react";


// Styles.

import "./style.css";


class Div extends Component {

    constructor(props) {
        super(props);
        var state = this.props.state;
        
        if (this.props.builderMode === "Resize") {
            state.style.resize = "both";
            state.style.overflow = "auto";
        } else {
            delete state.style.resize;
            delete state.style.overflow;
        }
        this.state = state;
    }


    DivonDrawFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.Div[e.index] = e.state;

        this.setState(state);
        debugger;
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

    div123onMouseOver(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        if (this.props.builderMode === "Draw") {
            state.style.cursor = "crosshair";
        }
        e.stopPropagation();


        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    div123onMouseDown(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        function create(type, x, y, text) {
            var item = document.createElement(type);
            item.style.position = "fixed";
            item.style.left = x + "px";
            item.style.top = y + "px";
            item.style['border-width'] = "1px";
            item.style['border-color'] = "green";
            item.style['border-style'] = "solid";
            item.id = "div" + ~~(Math.random() * 100000);
            if (text) {
                item.innerText = text;
            }
            return item;
        }

        if (e.button === 0) {
            if (this.props.builderMode === "Draw") {
                state.clientX = e.clientX;
                state.clientY = e.clientY;
                var div = create("div", e.clientX, e.clientY);
                var parent = e.target;
                parent.appendChild(div);

                state.divId = div.id;
                state.origin = true;
            }
        }

        if (this.props.builderMode === "Move") {
            state.style.cursor = "grabbing";
            state.grabbing = true;
        }
        if (this.props.builderMode === "Select"){
            state.selected = !state.selected;
            state.style.cursor = "pointer";
        }
        delete window.eClientY;
        delete window.eClientX;


        e.stopPropagation()
        console.log("mouseDown")
        this.setState(state);
        e.state = state;
        e.index = this.props.index;

    }

    div123onMouseMove(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        if (this.props.builderMode === "Draw") {
            if (state.origin) {
                var div = document.getElementById(state.divId);
                var rect = div.getBoundingClientRect();
                div.style.width = e.clientX - rect.left;
                div.style.height = e.clientY - rect.top;
            }
        }

        if (state.style.cursor == "grabbing" && state.grabbing) {
            var rect = e.target.getBoundingClientRect();

            window.eClientY = window.eClientY || e.clientY;
            window.eClientX = window.eClientX || e.clientX;

            e.target.style.top = (-window.eClientY + e.clientY) + rect.top + "px";
            e.target.style.left = (-window.eClientX + e.clientX) + rect.left + "px";

            window.eClientY = e.clientY;
            window.eClientX = e.clientX;
        }

        e.stopPropagation()

    }

    div123onMouseUp(e) {
        var state = JSON.parse(JSON.stringify(this.state))


        if (this.props.builderMode === "Draw") {
            if (e.button === 0) {
                state.origin = false;
            }
            let createdDiv = document.getElementById(state.divId);
            delete state.divId;

            if (state.clientX == e.clientX && state.clientY == e.clientY) {
                state.showOptions = !state.showOptions;
            }
            else {

                state.Div.push({
                    style: {
                        position: createdDiv.style.position,
                        top: createdDiv.style.top,
                        left: createdDiv.style.left,
                        height: createdDiv.style.height,
                        width: createdDiv.style.width,
                        borderWidth: createdDiv.style["border-width"],
                        borderStyle: createdDiv.style["border-style"],
                        borderColor: createdDiv.style["border-color"]
                    },
                    Div: [],
                    id: createdDiv.id,
                    mode: "Draw"
                })
            }
            createdDiv.remove();
        }
        if (this.props.builderMode === "Move") {
            e.target.style.cursor = "pointer";
            state.grabbing = false;
            state.style.top = e.target.style.top;
            state.style.left = e.target.style.left;
        }

        if (this.props.builderMode === "Resize") {
            state.style.height = e.target.style.height;
            state.style.width = e.target.style.width;
        }

        e.stopPropagation()
        console.log("mouseUp")

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (this.props.builderMode === 'Draw' && e.button === 0) {
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }

        if (this.props.builderMode === "Move") {
            this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
        }

        if (this.props.builderMode === "Resize") {
            this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
        }
    }

    render() {
        return (<div className="Div" style={this.state.style} id="div123" onMouseUp={this.div123onMouseUp.bind(this)} onMouseMove={this.div123onMouseMove.bind(this)} onMouseDown={this.div123onMouseDown.bind(this)} onMouseOver={this.div123onMouseOver.bind(this)} id="Div">{this.props.children}
            {this.state.Div.map((item, i) => <Div builderMode={this.props.builderMode} state={item} key={~~(Math.random() * 10000)} index={i} onDelete={this.DivonDelete.bind(this)} onResizeFinish={this.DivonResizeFinish.bind(this)} onMoveFinish={this.DivonMoveFinish.bind(this)} onDrawFinish={this.DivonDrawFinish.bind(this)}></Div>)}
        </div>)
    }
}

export default Div;