import React, { Component } from 'react';

// Styles.

import "./Style.css";
import Componentt from "./Componentt/Index";
import {onExport, onDelete} from "./Events"

import {deleteFolder, toggleFolder, selectFolder, deselectFolder} from "./Reducer";
import {dropHandler, dragOverHandler, dragLeaveHandler} from "./Events";

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

    render() {

        const components = this.props.components.map((element, index) => 
        <Componentt 
            key = {index} 
            element = {element}
            selectedComponent = {this.props.selectedComponent}
                onSelectionChange = {this.props.onSelection}
                onExport = {onExport.bind(this)}
                onDelete = {onDelete.bind(this)}
            />
        );
        if(this.props.folder.type=="NewFolder"){

        }
        if(this.props.folder.type=="Folder"){
            return (
                <div className={this.state.folderClass} 
                    onMouseOver={selectFolder.bind(this)} 
                    onMouseLeave={deselectFolder.bind(this)} 
                    onDrop={dropHandler.bind(this)} 
                    onDragOver={dragOverHandler.bind(this)} 
                    onDragLeave={dragLeaveHandler.bind(this)} >
                    <i className={this.state.status} onClick={toggleFolder.bind(this)}></i>
                    <input type="text" className="folder" placeholder="Enter folder name" value={this.state.name}/>
                    <ul>
                    </ul>
                </div>
            );
        }
        if(this.props.folder.type=="noFolder"){
            return (<ul>
                {components}
            </ul>)
        }
    }
}

export default Folder;
