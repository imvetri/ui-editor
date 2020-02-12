import React, { Component } from 'react';

// Styles.

import "./Style.css";

import {deleteFolder, toggleFolder, selectFolder, deselectFolder} from "./Reducer";
import {dropHandler, dragOverHandler, dragLeaveHandler} from "./Events";

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            folderClass: "newFolder",
            folder: this.props.folder.name,
            contents: this.props.folder.contents
        };

        window.addEventListener("keydown", deleteFolder.bind(this))
    }

    render() {

        if(this.state.type=="NewFolder"){

        }
        if(this.state.type=="Folder"){

        }
        if(this.state.type=="NoFolder"){

        }
        return (
            <div className={this.state.folderClass} onMouseOver={selectFolder.bind(this)} onMouseLeave={deselectFolder.bind(this)} onDrop={dropHandler.bind(this)} onDragOver={dragOverHandler.bind(this)} onDragLeave={dragLeaveHandler.bind(this)} >
                <i className={this.state.status} onClick={toggleFolder.bind(this)}></i>
                <input type="text" className="folder" placeholder="Enter folder name" value={this.state.folder}/>
                <ul>
                </ul>
            </div>
        );
    }
}

export default Folder;
