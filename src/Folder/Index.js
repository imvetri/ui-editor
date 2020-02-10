import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            newFolderClass: "newFolder",
            folder: this.props.folder.name,
            contents: this.props.folder.contents
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
        let componentName = ev.dataTransfer.getData("component-name");
        let contents = Array.from(this.state.contents);
        contents.push(componentName)
        this.props.onFolderItemUpdate({
            name: this.state.folder,
            contents : contents
        })
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
            <i className={this.state.status} onClick={this.toggleFolder.bind(this)}></i>
            <input type="text" className="folder" placeholder="Enter folder name" value={this.state.folder}/>
        </div>
        );
    }
}

export default Folder;
