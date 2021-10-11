// Libraries.

import React, { Component } from "react";

// State

import State from "./Div/State";

// Utility

import {deleteDiv, copyDiv, anySelected} from "./Utility";

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

        // check if mode is copy and any div is selected.
        if(anySelected(this.state)){
            if(e.currentTarget.innerText==="Copy" ){
                // Then create a copy div
                copyDiv(this.state);
            }
            if(e.currentTarget.innerText==="Delete" ){
                // Then create a copy div
                deleteDiv(this.state);
            }
            if(e.currentTarget.innerText==="Load Image" ){
                debugger
            }
            if(e.currentTarget.innerText==="Scan" ){
                this.convertToRectangles();
            }
        }
        this.setState({
            builderMode: e.currentTarget.innerText
        })
    }

    convertToRectangles(){

    }

    DivonUpdate(e) {
        this.setState(e.state);
    }

    fileChanged(e){
        this.setState({
            files: e.target.files[0]
        })
        window.loadedFiles = e.target.files;
        //URL.createObjectURL(e.target.files[0]);
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
                <button className={this.state.builderMode==="Draw"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-pen"></i>Draw</button>
                <button className={this.state.builderMode==="Select"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-check"></i>Select</button>
                <button className={this.state.builderMode==="Move"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-arrows-alt"></i>Move</button>
                <button className={this.state.builderMode==="Resize"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-compress-arrows-alt"></i>Resize</button>
                <button className={this.state.builderMode==="Delete"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-trash-alt"></i>Delete</button>
                <button className={this.state.builderMode==="Copy"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-copy"></i>Copy</button>
                <button className={this.state.builderMode==="Save"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-save"></i>Save</button>
                <button className={this.state.builderMode==="Edit"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-edit"></i>Edit</button>
                <button className={this.state.builderMode==="Events"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-bolt"></i><input onChange={this.fileChanged.bind(this)} type="file"/>Load Image</button>
                <button className={this.state.builderMode==="Interact"?"mode":""} onClick={this.changeMode.bind(this)}><i class="fas fa-bolt"></i>Scan</button>
            </div>
            <Div parent={this.state} files={this.state.files} builderMode={this.state.builderMode} state={this.state} index={0}key={Math.ceil(Math.random() * 1000)} 
                    onDrawFinish={this.DivonUpdate.bind(this)}  
                    onDelete={this.DivonUpdate.bind(this)} 
                    onResizeFinish={this.DivonUpdate.bind(this)} 
                    onMoveFinish={this.DivonUpdate.bind(this)}
                    onSelection={this.DivonUpdate.bind(this)}>
            </Div>
        </div>
        )
    }

}

export default Builder;