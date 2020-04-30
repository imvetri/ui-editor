import React, { Component } from 'react';

// Utilities.

import { findFolder } from "./findFolders";

// Styles.

import "./Style.css";

import { folderStructure } from "./processFolder";

class Folders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    removeFolderFromParent(folders, oldParent, contentName) {
        let oldParentFolder = findFolder(oldParent , folders[0] )
        let deleteIndex = oldParentFolder.contents.findIndex(content=>typeof content === "object" && content.name===contentName);
        if(deleteIndex>-1)
            oldParentFolder.contents.splice(deleteIndex,1)
    }

    removeContentFromParent(folders, oldParent, contentName) {
        let oldParentFolder = findFolder(oldParent , folders[0] )
        let removeIndex = oldParentFolder.contents.findIndex(content=>content===contentName)
        if(removeIndex!==-1)
            oldParentFolder.contents.splice(removeIndex,1)
    }


    onFolderUpdate(data, type, oldParent, content) {
        let folders = Array.from(this.state.folders);
        let newParent = data.name;
        let folder = findFolder(newParent, folders[0])
        if (type == "NEWFOLDER") {
            let emptyFolderIndex = folders.findIndex(folder => folder.type === "NewFolder");
            if (emptyFolderIndex !== -1) {
                // Delete the newFolder
                folders.splice(emptyFolderIndex, 1);
            }

            let noFolder = folders[0];
            noFolder.contents.unshift(data);
        }

        if (type == "COMPONENT") {
            folder.contents = data.contents;
            this.removeContentFromParent(folders, oldParent, content)

        }
        else if (type == "FOLDER") {
            folder.contents = data.contents;
            this.removeFolderFromParent(folders, oldParent, content, newParent)

        }
        this.props.onFoldersUpdate(folders);

    }

    onFolderStatusChanged(folder){
        // find folder,
        let folderToUpdate = findFolder(folder.name, this.state.folders[0])
        // update it in folders,
        folderToUpdate.status = folder.status;
        this.props.onFoldersUpdate(this.state.folders)
    }

    render() {
        return folderStructure(this.props, this.onFolderUpdate.bind(this), this.onFolderStatusChanged.bind(this))
    }
}

export default Folders;
