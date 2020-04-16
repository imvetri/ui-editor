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

    findFolder(folderName , folder ){

        if(typeof folder === "string"){
            return false
        }

        if(typeof folder === "object"){
            if(folder.name===folderName){
                return folder;
            }
            return folder.contents.find(function(content){
                return this.findFolder(folderName, content)
            }.bind(this))
        }
    }

    removeContent(folder, folders){
        
        let contents = folder.contents;

        // Nasty logic. 
        function checkAndRemove(folder, contents){
            let indexes = [];
            contents.forEach(content=>{
                indexes.push(folder.contents.findIndex(item=>item===content))
            })
            indexes = indexes.filter(index=> index>-1);

            indexes.forEach(index=>{
                folder.contents[index] = -1;
            })

            folder.contents = folder.contents.filter(content=>content!==-1)

            return folder.contents;
        }


        function traverseFolder(currentFolder){

            // Return if it is the same folder.
            if(folder.name===currentFolder.name){
                return "";
            }
            // check if any of contents are present in folder.
            currentFolder.contents = checkAndRemove(currentFolder,contents )

            if(typeof currentFolder === "object"){
                return currentFolder.contents.filter(item=>typeof item === "object").find(function(fooled){
                    return traverseFolder(fooled)
                }.bind(this))
            }
        }

        traverseFolder(folders[0])

    }

    checkFolder(data){
        let folders = Array.from(this.state.folders);
        let emptyFolderIndex = folders.findIndex(folder=>folder.type==="NewFolder");
        if(emptyFolderIndex!==-1){
            // Delete the newFolder
            folders.splice(emptyFolderIndex,1);
        }
        console.log(folders)
        // Check if it is newly created folder 
        let folder = this.findFolder(data.name, folders[0])
        if(!folder){
            console.log(`Folder not found, adding ${JSON.stringify(data)}to list of folders ${JSON.stringify(folders)}`);
            // Push it into noFolder.contents
            let noFolder = folders[0];
            noFolder.contents.unshift(data);
        } 
        // Update existing one
        else {
            console.log(`Folder found, updating the folder content from ${folder.contents} to ${data.contents}`)
            folder.contents = data.contents;

            // Make sure current data.contents are removed from other folders.
            this.removeContent(folder, folders)
        }

        console.log(folders)

        this.props.onFoldersUpdate(folders);
    }

    render() {
        return folderStructure(this.props, this.checkFolder.bind(this) )
    }
}

export default Folders;
