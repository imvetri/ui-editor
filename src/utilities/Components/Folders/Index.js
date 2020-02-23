import React, { Component } from 'react';

// Styles.

import "./Style.css";

import {folderStructure} from "./processFolder";

class Folders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    checkFolder(data){
        let folders = Array.from(this.state.folders);
        let folder = folders.find(folder=>folder.name===data.name);
        let emptyFolderIndex = folders.findIndex(folder=>folder.type==="NewFolder");
        if(emptyFolderIndex!==-1){
            // Delete the newFolder
            folders.splice(emptyFolderIndex,1);
        }
        console.log(folders)
        // Check if it is newly created folder 
        if(!folder){
            console.log(`Folder not found, adding ${JSON.stringify(data)}to list of folders ${JSON.stringify(folders)}`);
            folders.push(data);
        } 
        // Update existing one
        else {
            console.log(`Folder found, updating the folder content from ${folder.contents} to ${data.contents}`)
            folder.contents = data.contents;

            // Makes sure that contents are not duplicated in other folders.
            folders.forEach(currentFolder=>{

                if(currentFolder.name !== data.name){
                    data.contents.forEach(content=>{
                        let index = currentFolder.contents.findIndex(item=>item===content)
                        index!==-1? currentFolder.contents.splice(index,1): null;
                    })
                }
            })
        }

        console.log(folders)

        this.props.onFoldersUpdate(folders);
    }

    render() {
        return folderStructure(this.props, this.checkFolder.bind(this) )
    }
}

export default Folders;
