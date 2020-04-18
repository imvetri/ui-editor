import React, { Component } from 'react';

// Styles.

import "./Style.css";
import NewFolder from "../NewFolder";

import {deleteFolder, toggleFolder} from "./Reducer";
import {dropHandler, dragOverHandler, dragLeaveHandler, folderStartDrag} from "./Events";

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconStatus: "fa fa-folder",
            folderClass: "newFolder",
            name: this.props.folder.name,
            contents: this.props.folder.contents,
            type: this.props.folder.type,
            status: this.props.folder.status
        };
    }


    newFolder(folder){
        this.props.onFolderUpdate(folder, "NEWFOLDER")
    }

    render() {

        let folder = this.props.folder;
        let contents = this.props.contents;
        let iconStatus = this.state.status === "open" ? "fa fa-folder-open" : "fa fa-folder";
        if(folder.type=="NewFolder"){
            return (<NewFolder onNewFolder={this.newFolder.bind(this)}/>)
        }
        if(folder.type=="folder"){
            return (
                <div 
                    className={this.state.folderClass}
                    data-folder-name={folder.name}
                    draggable="true"
                            onDrop={dropHandler.bind(this)} 
                            onDragOver={dragOverHandler.bind(this)} 
                            onDragLeave={dragLeaveHandler.bind(this)} 
                            onDragStart={folderStartDrag.bind(this)} >
                    <i className={iconStatus} onClick={toggleFolder.bind(this)}></i>
                    <input type="text" className="folder" placeholder="Enter folder name" readOnly value={this.state.name}/>
                    <button onClick={deleteFolder.bind(this)}><i className="fa fa-trash"></i>Delete</button>
                    {this.state.status === "open" ? contents : null}
                </div>
            );
        }
        if(folder.type=="noFolder"){
            return (
                <div 
                    className={this.state.folderClass}
                    data-folder-name={folder.name}
                    draggable="true"
                            onDrop={dropHandler.bind(this)} 
                            onDragOver={dragOverHandler.bind(this)} 
                            onDragLeave={dragLeaveHandler.bind(this)}
                            onDragStart={folderStartDrag.bind(this)}  >
                    {contents}
                </div>
            );
        }
    }
}

export default Folder;
