import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            newFolderClass: "newFolder"
        };
    }

    openFolder(){
        this.setState({
            status: "fa fa-folder-open"
        })
    }

    closeFolder(){
        this.setState({
            status: "fa fa-folder"
        })
    }

    toggleFolder(){
        this.state.status === "fa fa-folder"?  this.openFolder() : this.closeFolder();
    }

    dropHandler(ev) {
        ev.preventDefault();

        this.setState({
            newFolderClass: "newFolder"
        })
        console.log("Drop");
    }

    dragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
            newFolderClass: "newFolder dragOver"
        })
        console.log("Drag");
    }

    dragLeaveHandler(e) {
        console.log("drag");
        this.setState({
            newFolderClass: "newFolder"
        })
    }

    render() {

        return (
        <div className={this.state.newFolderClass} onDrop={this.dropHandler.bind(this)} onDragOver={this.dragOverHandler.bind(this)} onDragLeave={this.dragLeaveHandler.bind(this)} >
            <i class={this.state.status} onClick={this.toggleFolder.bind(this)} aria-hidden="true"></i>
            <input type="text" className="folder" autoFocus={true} placeholder="Enter folder name"/>
        </div>
        );
    }
}

export default Folder;
