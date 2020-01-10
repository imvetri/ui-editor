import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Asset from "./Asset";
import {indexedDB} from "../utilities/indexedDB/indexeDB"


class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: "drop_zone",
            imageURL:"",
            assets: []
        };
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

    writeToDB(result, name){
        window.iDB.get(name).then(data=>{
            var img = document.createElement("img");
            img.href = data.result;
            this.setState({
                imageURL: data.result
            })
            document.body.append(img)
        })
        window.iDB.put({name: name, result: result})
    }

    dropHandler(ev) {
        ev.preventDefault();

        [].forEach.call(ev.dataTransfer.files, (file)=>{
            var reader = new FileReader();
            debugger;
            reader.readAsDataURL(file);
            debugger;
            reader.onloadend =  function (event,b) {
                // 1. append to body
                // 2. write to db.
                this.appendToBody(file);
                this.writeToDB(event.target.result, file.name);

            }.bind(this);
        })

        this.setState({
            class: "drop_zone"
        })
    }

    dragOverHandler(ev) {
        console.log('File(s) in drop zone');

        this.setState({
            class: "drag_over"
        })

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    dragLeaveHandler(e) {
        this.setState({
            class: "drop_zone"
        })
    }

    fetchFromDB(){
        window.iDB.getAll().then(data=>{
            this.setState({
                assets: data
            })
        });
    }

    render() {

        let assets = this.state.assets.map(item=> <Asset imageURL={item.result}/>);
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Assets
                    </div>
                    <button onClick={this.fetchFromDB.bind(this)}>Load Assets</button>
                    <div onDrop={this.dropHandler.bind(this)} onDragOver={this.dragOverHandler.bind(this)} onDragLeave={this.dragLeaveHandler.bind(this)} className={this.state.class}>
                        <p>Drag one or more files to this Drop Zone ...</p>
                    </div>
                    <ul className="contain">
                        {assets}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Assets;
