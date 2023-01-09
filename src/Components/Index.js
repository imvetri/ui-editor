import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Window from '../Window';
import Folders from "../Utilities/Components/Folders";


class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders,
            showControls: this.props.showControls
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

    render() {
        let props = this.props;
        let state = this.state;
        return (
            <Window>
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <div className="Controls">
                        <button onClick={this.addComponent.bind(this)}><i className="fa fa-edit"></i>{props.selectedComponent ? "Edit" : "Add"}</button>
                        <button onClick={this.addFolder.bind(this)}><i className="fa fa-folder"></i>Folder</button>
                    </div>
                    <div className="folders">
                        <Folders
                            key={Math.ceil(Math.random() * 1000)}
                            components={state.components}
                            folders={state.folders}
                            selectedComponent={props.selectedComponent}
                            onFoldersUpdate={props.onFoldersUpdate}
                            onSelection={props.onSelection}
                        />
                    </div>
                </div>
            </Window>
        );
    }
}

export default Components;
