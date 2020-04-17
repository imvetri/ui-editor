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

    removeFolderFromParent(folder, folders) {

        let contents = folder.contents;

        // Nasty logic. 
        function checkAndRemove(folder, contents) {
            let indexes = [];
            contents.forEach(content => {
                indexes.push(folder.contents.findIndex(item => item === content))
            })
            indexes = indexes.filter(index => index > -1);

            indexes.forEach(index => {
                folder.contents[index] = -1;
            })

            folder.contents = folder.contents.filter(content => content !== -1)

            return folder.contents;
        }


        function traverseFolder(currentFolder) {

            // Return if it is the same folder.
            if (folder.name === currentFolder.name) {
                return "";
            }
            // check if any of contents are present in folder.
            currentFolder.contents = checkAndRemove(currentFolder, contents)

            if (typeof currentFolder === "object") {
                return currentFolder.contents.filter(item => typeof item === "object").find(function (fooled) {
                    return traverseFolder(fooled)
                }.bind(this))
            }
        }

        traverseFolder(folders[0])

    }

    removeContent(folder, folders, parentFolderName, contentName) {

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
            this.removeContent(folder, folders, parentFolderName, content)

        }
        else if (type == "FOLDER") {
            // this.removeFolderFromParent(folder, folders)

        }
        this.props.onFoldersUpdate(folders);

    }

    render() {
        return folderStructure(this.props, this.onFolderUpdate.bind(this))
    }
}

export default Folders;
