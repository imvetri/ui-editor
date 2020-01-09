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
            class: "drop_zone"
        };
    }

    dropHandler(ev) {
        console.log('File(s) dropped');

        Function.prototype.bindToEventHandler = function bindToEventHandler() {
            var handler = this;
            var boundParameters = Array.prototype.slice.call(arguments);
            console.log(boundParameters);
            //create closure
            return function(e) {
              e = e || window.event; // get window.event if e argument missing (in IE)   
              boundParameters.unshift(e);
              handler.apply(this, boundParameters);
            }
          };

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();


            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
                var reader = new FileReader();
                var file = ev.dataTransfer.files[i];
                //attach event handlers here...

                reader.readAsDataURL(file);
                reader.onloadend =  function (e, file) {
                    var bin = this.result;
                    var newFile = document.createElement('div');
                    newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
                    document.body.appendChild(newFile);


                    var img = document.createElement("img");
                    img.file = file;
                    img.src = bin;
                    newFile.appendChild(img);
                }.bindToEventHandler(file);
            }
        
        window.iDB && window.iDB.put && window.iDB.put("uiEditor", {name: "dolf", species: "pitler"});

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

    render() {

        let assets = [];
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Assets
                    </div>
                    <div onDrop={this.dropHandler.bind(this)} onDragOver={this.dragOverHandler.bind(this)} onDragLeave={this.dragLeaveHandler.bind(this)} className={this.state.class}>
                        <p>Drag one or more files to this Drop Zone ...</p>
                    </div>
                    <ul>
                        {assets}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Assets;
