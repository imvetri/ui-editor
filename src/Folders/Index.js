import React, { Component } from 'react';

// Styles.

import "./Style.css";
import Folder from "../Folder";

class Folders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    render() {
        return this.props.folders.map(folder=> <Folder
            folder={folder} 
            components={components} 
            selectedComponent = {this.props.selectedComponent}
            onSelection = {this.props.onSelection}
            onFolderUpdate={this.props.onFoldersUpdate} />)
    }
}

export default Folders;
