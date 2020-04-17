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

    removeFolderFromParent(folders, parentFolderName, contentName) {
        let parentFolder = findFolder(parentFolderName , folders[0] )
        let deleteIndex = parentFolder.contents.findIndex(content=>typeof content === "object" && content.name===contentName);
        if(deleteIndex>-1)
            parentFolder.contents.splice(deleteIndex,1)
    }

    removeContentFromParent(folders, parentFolderName, contentName) {
        let parentFolder = findFolder(parentFolderName , folders[0] )
        let removeIndex = parentFolder.contents.findIndex(content=>content===contentName)
        if(removeIndex!==-1)
            parentFolder.contents.splice(removeIndex,1)
    }


    onFolderUpdate(data, type, parentFolderName, content) {
        let folders = Array.from(this.state.folders);
        let folder = findFolder(data.name, folders[0])
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
            this.removeContentFromParent(folders, parentFolderName, content)

        }
        else if (type == "FOLDER") {
            folder.contents = data.contents;
            this.removeFolderFromParent(folders, parentFolderName, content)

        }
        this.props.onFoldersUpdate(folders);

    }

    render() {
        return folderStructure(this.props, this.onFolderUpdate.bind(this))
    }
}

export default Folders;
