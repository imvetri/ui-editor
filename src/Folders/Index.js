import React, { Component } from 'react';

// Styles.

import "./Style.css";
import Componentt from "../Componentt";
import Folder from "../Folder";

import {onExport, onDelete} from "./Events"

class Folders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: this.props.components,
            folders: this.props.folders
        };
    }

    render() {

        const components = this.props.components.map((element, index) => 
        <Componentt 
            key = {index} 
            element = {element}
            selectedComponent = {this.props.selectedComponent}
                onSelectionChange = {this.props.onSelection}
                onExport = {onExport.bind(this)}
                onDelete = {onDelete.bind(this)}
            />
        );

        return this.props.folders.map(folder=> <Folder folder={folder} components={components}  />)
    }
}

export default Folders;
