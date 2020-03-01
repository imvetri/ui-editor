import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Asset from "./Asset";

// Events.

import {dropHandler, dragOverHandler, dragLeaveHandler} from "./Reducer";

// Db utils.

import {fetchFromDB, writeToDB} from "./db";

class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "drop_zone",
            imageURL:"",
            assets: [],
            selectedAsset:""
        };
        this.writeToDB = writeToDB.bind(this);
    }

    appendToBody(file){
        var bin = this.result;
        var newFile = document.createElement('div');
        newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
        document.body.appendChild(newFile);


        var img = document.createElement("img");
        img.file = file;
        img.src = bin;
        newFile.appendChild(img);
    }

    updatedSelected(e) {
        let assetName = e.target.getAttribute("data-name"); 
        this.setState({
            selectedAsset: assetName
        })
    }

    render() {

        let assets = this.state.assets.map(asset=> <Asset asset={asset} selected={this.state.selectedAsset} onSelected={this.updatedSelected.bind(this)}/>);
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Assets
                    </div>
                    <button onClick={fetchFromDB.bind(this)}>Load Assets</button>
                    <div 
                        className={this.state.class}
                            onDrop={dropHandler.bind(this)} 
                            onDragOver={dragOverHandler.bind(this)} 
                            onDragLeave={dragLeaveHandler.bind(this)}>
                        
                        <p>Drag one or more files to this Drop Zone ...</p>
                    </div>
                    {assets}
                </div>
            </div>
        );
    }
}

export default Assets;
