import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Folders from "../Utilities/Components/Folders";
import { onDeleteComponent, onDeleteFolder } from "./Events";

// Events.

class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders,
            showControls: false
        };
    }

    addFolder() {
        let folders = Array.from(this.state.folders);
        folders.unshift({
            type: "NewFolder",
            name: "",
            contents: [],
            status: "closed"
        })
        this.setState({ folders })
    }

    addComponent() {
        this.props.onOpenEditor();
    }

    showControls() {
        this.setState({
            showControls: true
        })
    }

    hideControls() {
        this.setState({
            showControls: false
        })
    }
    render() {
        let props = this.props;
        let state = this.state;
        let classes = this.state.showControls ? 'Controls' : 'Controls hideControls'
        return (
            <div className="container elements-tab" onMouseEnter={this.showControls.bind(this)} onMouseLeave={this.hideControls.bind(this)}>
                <div className="title">
                    Components
                    <div className={classes}>
                        <button onClick={this.addComponent.bind(this)}><i className="fa fa-edit"></i>{props.selectedComponent ? "Edit Component" : "Add Component"}</button>
                        <button onClick={this.addFolder.bind(this)}><i className="fa fa-folder"></i>Add Folder</button>
                    </div>
                </div>
                <div className="folders">
                    <Folders
                        key={Math.ceil(Math.random() * 1000)}
                        components={state.components}
                        folders={state.folders}
                        selectedComponent={props.selectedComponent}
                        onFoldersUpdate={props.onFoldersUpdate}
                        onSelection={props.onSelection}
                        onDeleteComponent={onDeleteComponent.bind(this)}
                        onDeleteFolder={onDeleteFolder.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Components;
