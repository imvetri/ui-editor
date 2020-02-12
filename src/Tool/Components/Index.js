import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Folders from "./Folders";

// Events.

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            showNewFolder: false,
            folders: this.props.folders
        };
    }

    addFolder(){
        this.setState({
            showNewFolder: true
        })
    }

    render() {

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
                        <Folders 
                            components={this.props.elements} 
                            folders={this.props.folders} 
                            selectedComponent={this.props.selectedComponent}
                            showNewFolder={this.state.showNewFolder}
                                onFoldersUpdate={this.props.onFoldersUpdate}
                                onSelection = {this.props.onSelection}
                            />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
