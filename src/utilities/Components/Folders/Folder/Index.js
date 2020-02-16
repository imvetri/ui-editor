import React, { Component } from 'react';

// Styles.

import "./Style.css";
import Componentt from "../../../../Components/Componentt"
import NoFolder from "../NoFolder";

import {onExport} from "./Events"

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

        let folder = this.props.folder;
        let contents = folder.contents;
        let components = this.props.components;
        const renderedComponents = contents.map((componentName)=>{
            let component = components.find(component=>component.name.includes(componentName))
            return <Componentt 
                key = {Math.ceil(Math.random() * 1000)}
                element = {component}
                selectedComponent = {this.props.selectedComponent}
                    onSelectionChange = {this.props.onSelection}
                    onExport = {onExport.bind(this, this.props.selectedComponent)}
                    onDelete = {this.props.onDelete}
            />
        });
        if(folder.type=="folder"){
            return (
                <div className={this.state.folderClass} 
                            onMouseOver={selectFolder.bind(this)} 
                            onMouseLeave={deselectFolder.bind(this)} 
                            onDrop={dropHandler.bind(this)} 
                            onDragOver={dragOverHandler.bind(this)} 
                            onDragLeave={dragLeaveHandler.bind(this)} >
                    <i className={this.state.status} onClick={toggleFolder.bind(this)}></i>
                    <input type="text" className="folder" placeholder="Enter folder name" readOnly value={this.state.name}/>
                    <ul>
                        {renderedComponents}
                    </ul>
                </div>
            );
        }
        if(folder.type=="noFolder"){
            return (<NoFolder renderedComponents={renderedComponents}>
            </NoFolder>)
        }
    }
}

export default Folder;
