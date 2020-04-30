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
            showControls: this.props.showControls,
            viewType : "LIST_VIEW"
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

    toggleView() {
        this.setState({
            viewType: this.state.viewType === "LIST_VIEW" ? "THUMBNAIL_VIEW" : "LIST_VIEW"
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
                        <button onClick={this.toggleView.bind(this)}>
                            {this.state.viewType === "LIST_VIEW"?<i class="fas fa-list"></i>:<i class="fas fa-image"></i>}
                            {this.state.viewType === "LIST_VIEW"?"List":"Thumbnail"}
                        </button>
                    </div>
                </div>
                <div className="folders">
                    <Folders
                        key={Math.ceil(Math.random() * 1000)}
                        components={state.components}
                        folders={state.folders}
                        selectedComponent={props.selectedComponent}
                        viewType={this.state.viewType}


                        onFoldersUpdate={props.onFoldersUpdate}
                        onSelection={props.onSelection}
                    />
                </div>
            </div>
        );
    }
}

export default Components;
