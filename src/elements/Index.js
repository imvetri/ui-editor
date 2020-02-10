import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Element from "../Element";
import Folder from "../Folder";
import NewFolder from "../NewFolder";
// Reducers.

import {onDelete} from "./Reducer"

// Events.

import { onExport} from "./Events";
import {writeData} from "../utilities/localStorage";


class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            selectedIndex:0,
            showNewFolder: false,
            folders: this.props.folders
        };

        this.onDelete = onDelete.bind(this);
    }

    createVariant(component){

        // 1. Update markup.
        let variant = JSON.parse(JSON.stringify(component));
        variant.name = "Variant"+variant.name
        variant.markup = variant.markup.replace(/>(.*?)</g, '>{state.variant}<')

        // 2. Update state.
        if(typeof variant.state === "string"){
            variant.state = JSON.parse(variant.state)
            variant.state.variant = "text"
        }
        else if(typeof variant.state === "object"){
            variant.state.variant = "text"
        }
        else{
            variant.state = {}
        }
        variant.state.variant = "text";

        variant.state = JSON.stringify(variant.state);

        return variant;
    }

    generateVariant(index){
        /**
         * 1. Take the current element selected
         * 2. Remove plain texts and replace it with property
         * 3. Create the property in the state.
         */
        let currentComponent = this.state.elements[index];
        let variant = this.createVariant(currentComponent);

        let elements = this.state.elements;
        elements.push(variant);

        this.setState({
            elements:elements
        })
        writeData("ui-editor",elements);
    }

    addFolder(){
        this.setState({
            showNewFolder: true
        })
    }

    saveNewFolder(folderName){
        let folders = Array.from(this.state.folders);
        folders.push(folderName);
        this.setState({
            folders: folders,
            showNewFolder: false
        })
        this.props.onFoldersUpdate(folders)
    }

    updateFolderContent(folders){
        this.setState({
            folders: folders,
            showNewFolder: false
        })
        this.props.onFoldersUpdate(folders)
    }
    
    render() {

        const elementList = this.props.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.props.selectedIndex}
                element = {element}
                onSelectionChange = {this.props.onSelection}
                onExport = {onExport.bind(this)}
                onDelete = {this.onDelete}
                onGenerateVariant = {this.generateVariant.bind(this)}/>
        );
        
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <div className="Controls">
                        <button><i className="fa fa-plus"></i>Add Component</button>
                        <button onClick={this.addFolder.bind(this)}><i className="fa fa-folder"></i>Add Folder</button>
                    </div>
                    <ul>
                        {this.state.folders.map((folder,index)=><Folder folder={folder} key={index} onFolderItemUpdate={this.updateFolderContent.bind(this)}/>)}
                        {this.state.showNewFolder? <NewFolder onNewFolder={this.saveNewFolder.bind(this)}/>:null}
                        {elementList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
