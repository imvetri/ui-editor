import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

class NewFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            newFolderClass: "newFolder",
            folderName: ""
        };
    }

    folderNameChanged(e){
        this.setState({
            folderName: e.currentTarget.value
        })
    }

    saveFolderName(){
        this.props.onNewFolder(this.state.folderName)
    }

    saveFolderNameOnEnter(e){
        if(e.key==="Enter"){
            this.props.onNewFolder(this.state.folderName)
        }
    }

    render() {

        return (
        <div className={this.state.newFolderClass}>
            <i className={this.state.status}></i>
            <input 
                type="text" 
                className="folder" 
                autoFocus={true} 
                placeholder="Enter folder name"
                value = {this.state.folderName}
                onChange={this.folderNameChanged.bind(this)}
                onMouseLeave={this.saveFolderName.bind(this)}
                onKeyPress={this.saveFolderNameOnEnter.bind(this)}/>
        </div>
        );
    }
}

export default NewFolder;
