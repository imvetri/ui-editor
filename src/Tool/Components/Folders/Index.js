import React, { Component } from 'react';

// Styles.

import "./Style.css";
import Folder from "./Folder";

class Folders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    checkFolder(data){
        debugger
        this.props.onFoldersUpdate(data);
    }

    render() {
        return this.props.folders.map((folder, index)=> <Folder
            key={Math.ceil(Math.random() * 1000)} 
            folder={folder} 
            components={components} 
            selectedComponent = {this.props.selectedComponent}
            onSelection = {this.props.onSelection}
            onFolderUpdate={this.checkFolder.bind(this)} />);
    }
}

export default Folders;
