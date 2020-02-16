import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Folders from "../Utilities/Components/Folders";
import NewFolder from "../Utilities/Components/Folders/NewFolder";
import {onDelete} from "./Events";

// Events.

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            showNewFolder: false,
            folders: this.props.folders
        };
    }

    addFolder(){
        this.setState({
            showNewFolder: true
        })
    }

    newFolder(folder){
        let folders = Array.from(this.state.folders)
        folders.unshift(folder);
        this.props.onFoldersUpdate(folders)
    }

    addComponent(){
        this.props.onOpenEditor();
    }

    render() {

        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <div className="Controls">
                        <button onClick={this.addComponent.bind(this)}><i className="fa fa-edit"></i>Edit Component</button>
                        <button onClick={this.addFolder.bind(this)}><i className="fa fa-folder"></i>Add Folder</button>
                    </div>
                    <ul>
                        {this.state.showNewFolder? <NewFolder onNewFolder={this.newFolder.bind(this)}/>:null}
                        <Folders
                            key = {Math.ceil(Math.random() * 1000)}
                            components={this.state.components} 
                            folders={this.state.folders} 
                            selectedComponent={this.props.selectedComponent}
                            showNewFolder={this.state.showNewFolder}
                                onFoldersUpdate={this.props.onFoldersUpdate}
                                onSelection = {this.props.onSelection}
                                onDelete={onDelete.bind(this)}
                            />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
