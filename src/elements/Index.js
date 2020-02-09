import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Element from "../Element";
import Folder from "../Folder";
// Reducers.

import {onDelete} from "./Reducer"

// Events.

import { onExport} from "./Events";
import {writeData} from "../utilities/localStorage";


class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            selectedIndex:0,
            showNewFolder: false
        };

        this.onDelete = onDelete.bind(this);
    }

    createVariant(component){

        // 1. Update markup.
        let variant = JSON.parse(JSON.stringify(component));
        variant.name = "Variant"+variant.name
        variant.markup = variant.markup.replace(/>(.*?)</g, '>{state.variant}<')

        // 2. Update state.
        if(typeof variant.state === "string"){
            variant.state = JSON.parse(variant.state)
            variant.state.variant = "text"
        }
        else if(typeof variant.state === "object"){
            variant.state.variant = "text"
        }
        else{
            variant.state = {}
        }
        variant.state.variant = "text";

        variant.state = JSON.stringify(variant.state);

        return variant;
    }

    generateVariant(index){
        /**
         * 1. Take the current element selected
         * 2. Remove plain texts and replace it with property
         * 3. Create the property in the state.
         */
        let currentComponent = this.state.elements[index];
        let variant = this.createVariant(currentComponent);

        let elements = this.state.elements;
        elements.push(variant);

        this.setState({
            elements:elements
        })
        writeData("ui-editor",elements);
    }

    addFolder(){
        this.setState({
            showNewFolder: true
        })
    }
    
    render() {

        const elementList = this.props.elements.map((element, index) => 
            <Element 
                key = {index} 
                index = {index}
                selectedIndex = {this.props.selectedIndex}
                element = {element}
                onSelectionChange = {this.props.onSelection}
                onExport = {onExport.bind(this)}
                onDelete = {this.onDelete}
                onGenerateVariant = {this.generateVariant.bind(this)}/>
        );

        const newFolder = <Folder/>;

        
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <div className="Controls">
                        <button><i class="fa fa-plus" aria-hidden="true"></i>Add Component</button>
                        <button onClick={this.addFolder.bind(this)}><i class="fa fa-folder" aria-hidden="true"></i>Add Folder</button>
                    </div>
                    <ul>
                        {this.state.showNewFolder? newFolder: null}
                        {elementList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
