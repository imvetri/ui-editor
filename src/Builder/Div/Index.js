// Libraries.

import React, { Component } from "react";


// Styles.

import "./style.css";


class Div extends Component {

    constructor(props) {
        super(props);
        var state = JSON.parse(JSON.stringify(this.props.state));
        
        if (this.props.builderMode === "Resize" && state.selected) {
            state.style.resize = "both";
            state.style.overflow = "auto";
        } else {
            state.style.resize = "";
            state.style.overflow = "";
        }
        if(this.props.builderMode === "Select"){
            state.style.cursor = "pointer";
        }
        if (this.props.builderMode === "Draw") {
            state.style.cursor = "crosshair";
        }
        this.state = state;
    }


    DivonDrawFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.children[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onDrawFinish ? this.props.onDrawFinish(e) : null;
        }
    }


    DivonMoveFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.children[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onMoveFinish ? this.props.onMoveFinish(e) : null;
        }
    }

    DivonResizeFinish(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.children[e.index] = e.state;

        this.setState(state);
        e.state = state;
        e.index = this.props.index;

        if (true) {
            this.props.onResizeFinish ? this.props.onResizeFinish(e) : null;
        }
    }

    DivonSelection(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.children[e.index] = e.state;
        e.state = state;
        e.index = this.props.index;
        this.props.onSelection(e);
    }

    DivonDelete(e) {
        var state = JSON.parse(JSON.stringify(this.state))

        state.children.splice(e.index, 1);

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
            if(state.selected){
                state.style.borderColor = "rgb(76, 175, 80)";
                state.style.borderWidth = "3px"
            } else {
                state.style.borderColor = "green";
                state.style.borderWidth = "1px";
            }
            
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

        if (state.style.cursor == "grabbing" && state.grabbing && state.selected) {
            var rect = e.target.getBoundingClientRect();

            window.eClientY = window.eClientY || e.clientY;
            window.eClientX = window.eClientX || e.clientX;

            e.target.style.top = (-window.eClientY + e.clientY) + rect.top + "px";
            e.target.style.left = (-window.eClientX + e.clientX) + rect.left + "px";
            e.target.style.position = "fixed";

            window.eClientY = e.clientY;
            window.eClientX = e.clientX;
        }

        if (this.props.builderMode === "Select" && !this.state.selected && !state.selected) {
            state.style.borderColor = "dodgerblue";
            state.style.borderWidth = "3px"
            this.setState(state)
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
                var coord = document.querySelectorAll('#'+this.state.id)[0].getBoundingClientRect();
                state.children.push({
                    style: {
                        position: "absolute",
                        top: -coord.top + Number(createdDiv.style.top.split("px")[0]),
                        left: -coord.left + Number(createdDiv.style.left.split("px")[0]),
                        height: createdDiv.style.height,
                        width: createdDiv.style.width,
                        borderWidth: createdDiv.style["border-width"],
                        borderStyle: createdDiv.style["border-style"],
                        borderColor: createdDiv.style["border-color"],
                        resize: "",
                        overflow: ""
                    },
                    type: "Div",
                    children: [],
                    id: createdDiv.id,
                    mode: "Draw"
                })
            }
            createdDiv.remove();
        }
        if (this.props.builderMode === "Move") {
            e.target.style.cursor = "pointer";
            state.grabbing = false;

            var coord = document.querySelectorAll('#'+this.props.parent.id)[0].getBoundingClientRect();

            state.style.top = -coord.top + Number(e.currentTarget.style.top.split("px")[0])
            state.style.left = -coord.left + Number(e.currentTarget.style.left.split("px")[0])
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

        if (this.props.builderMode === "Select") {
            this.props.onSelection ? this.props.onSelection(e) : null;
        }
    }

    div123onMouseOut(){
        var state = JSON.parse(JSON.stringify(this.state));
        if (this.props.builderMode === "Select") {
            state.style.borderColor = "green";
            state.style.borderWidth = "1px"
            this.setState(state)
        }
    }

    /**
     * Original
     * 
     * 
     *         return (<div className="Div" style={this.state.style} id={this.state.id} 
                        onMouseUp={this.div123onMouseUp.bind(this)} 
                        onMouseMove={this.div123onMouseMove.bind(this)} 
                        onMouseDown={this.div123onMouseDown.bind(this)}
                        onMouseOut={this.div123onMouseOut.bind(this)}>{this.props.children}
            {this.state.Div.map((item, i) => <Div parent={this.state} builderMode={this.props.builderMode} state={item} key={~~(Math.random() * 10000)} index={i} 
                        onDelete={this.DivonDelete.bind(this)} 
                        onResizeFinish={this.DivonResizeFinish.bind(this)} 
                        onMoveFinish={this.DivonMoveFinish.bind(this)} 
                        onDrawFinish={this.DivonDrawFinish.bind(this)}
                        onSelection={this.DivonSelection.bind(this)}
            ></Div>)}
        </div>)
     * */
    render() {

        return React.createElement("div", {
            className: "Div",
            style: this.state.style,
            id: this.state.id,
            onMouseUp: this.div123onMouseUp.bind(this),
            onMouseMove: this.div123onMouseMove.bind(this),
            onMouseDown: this.div123onMouseDown.bind(this),
            onMouseOut: this.div123onMouseOut.bind(this)
          }, this.state.children.map((child, i) => React.createElement(eval(child.type), {
            parent: this.state,
            builderMode: this.props.builderMode,
            state: child,
            key: ~~(Math.random() * 10000),
            index: i,
            onDelete: this.DivonDelete.bind(this),
            onResizeFinish: this.DivonResizeFinish.bind(this),
            onMoveFinish: this.DivonMoveFinish.bind(this),
            onDrawFinish: this.DivonDrawFinish.bind(this),
            onSelection: this.DivonSelection.bind(this)
          })));
    }
}

export default Div;