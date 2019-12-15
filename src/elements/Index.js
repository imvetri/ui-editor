import React, { Component } from 'react';

// Styles.

import "./Style.css";

// Components.

import Element from "../Element";

// Reducers.

import {onDelete} from "./Reducer"

// Events.

import { onExport} from "./Events";


class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.elements,
            selectedIndex:0
        };

        this.onDelete = onDelete.bind(this);
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
                onDelete = {this.onDelete}/>
        );

        
        return (
            <div className="elements">
                <div className="container elements-tab">
                    <div className="title">
                        Components
                    </div>
                    <ul>
                        {elementList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Components;
