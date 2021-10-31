import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

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


    render() {
        let props = this.props;
        let state = this.state;
        return (
            <div className="container elements-tab">
                <div className="title">
                    Components
                </div>
                <div className="Controls">
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
        );
    }
}

export default Components;
