import React, { Component } from 'react';

// Styles.

import "./Style.css";
import NoFolder from "../NoFolder";
import NewFolder from "../NewFolder";

import {deleteFolder, toggleFolder, selectFolder, deselectFolder} from "./Reducer";
import {dropHandler, dragOverHandler, dragLeaveHandler, onDragStart} from "./Events";

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            folderClass: "newFolder",
            name: this.props.folder.name,
            contents: this.props.folder.contents,
            type: this.props.folder.type
        };

        window.addEventListener("keydown", deleteFolder.bind(this))
    }


    newFolder(folder){
        this.props.onFolderUpdate(folder)
    }

    render() {

        let folder = this.props.folder;
        let contents = this.props.contents;
        if(folder.type=="newFolder"){
            return (<NewFolder onNewFolder={this.newFolder.bind(this)}/>)
        }
        if(folder.type=="folder"){
            return (
                <div 
                    className={this.state.folderClass}
                    data-folder-name={folder.name}
                    draggable="true"
                            onMouseOver={selectFolder.bind(this)} 
                            onMouseLeave={deselectFolder.bind(this)} 
                            onDrop={dropHandler.bind(this)} 
                            onDragOver={dragOverHandler.bind(this)} 
                            onDragLeave={dragLeaveHandler.bind(this)} 
                            onDragStart={onDragStart.bind(this)} >
                    <i className={this.state.status} onClick={toggleFolder.bind(this)}></i>
                    <input type="text" className="folder" placeholder="Enter folder name" readOnly value={this.state.name}/>
                    <ul>
                        {contents}
                    </ul>
                </div>
            );
        }
        if(folder.type=="noFolder"){
            return (<NoFolder contents={contents}></NoFolder>)
        }
    }
}

export default Folder;
