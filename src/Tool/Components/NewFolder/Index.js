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

    saveFolderNameOnEnter(e){
        if(e.key==="Enter"){
            this.props.onNewFolder({
                name:this.state.folderName,
                contents:[],
                type:"Folder"
            })
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
                onKeyPress={this.saveFolderNameOnEnter.bind(this)}/>
        </div>
        );
    }
}

export default NewFolder;
