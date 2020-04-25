import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Asset from "./Asset";

// Events.

import {dropHandler, dragOverHandler, dragLeaveHandler} from "./Reducer";

// Utilities.

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

        /* Store the assets in local DB */

        this.writeToDB = writeToDB.bind(this);
    }

    appendToBody(file){
        var bin = this.result;
        var newFile = document.createElement('div');
        newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
        document.body.appendChild(newFile);


        /* Keep the image in DOM as cache. */

        var img = document.createElement("img");
        img.file = file;
        img.src = bin;
        newFile.appendChild(img);
    }

    updatedSelected(e) {

        /* Keep track of selected asset in the state */

        let assetName = e.target.getAttribute("data-name"); 
        this.setState({
            selectedAsset: assetName
        })
    }

    render() {

        /* Create an asset component for each assets. */

        let assets = this.state.assets.map(asset=> <Asset asset={asset} selected={this.state.selectedAsset} onSelected={this.updatedSelected.bind(this)}/>);
        
        return (
            <ul className="assets">
                <button onClick={fetchFromDB.bind(this)}>Load Assets</button>
                <div 
                    className={this.state.class}
                        onDrop={dropHandler.bind(this)} 
                        onDragOver={dragOverHandler.bind(this)} 
                        onDragLeave={dragLeaveHandler.bind(this)}>
                    
                    <p>Drag one or more files to this Drop Zone ...</p>
                </div>
                <div>
                    {this.state.selectedAsset.name}
                </div>
                {assets}
            </ul>
        );
    }
}

export default Assets;
