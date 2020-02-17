import React, { Component } from 'react';

// Styles.

import "./Style.css";

import {nodropHandler, nodragOverHandler} from "./Events";

class NoFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "fa fa-folder",
            folderClass: "noFolder"
        };
    }

    render() {
        return (<ul 
                    className="noFolder"
                    onDrop={nodropHandler.bind(this)} 
                    onDragOver={nodragOverHandler.bind(this)} >

            {this.props.contents}
        </ul>)
    }
}

export default NoFolder;
