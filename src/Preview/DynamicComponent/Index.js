// Libraries.

import React, { Component } from "react";

import { getNestedComponents, saveComponentsToWindow } from "../../utilities/nestedComponentSetup";

import "./style.css";

class DynamicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: this.props.component
        }
        
    }

    render() {

        if(this.state.component.name===undefined){
            return (<div>No component selected.</div>)
        }
        let nestedComponents = getNestedComponents(this.state.component);
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);
        }

        if(!window[this.state.component.name]){
            return (<div>Component not rendered</div>)
        }

        return (
            <div>
                {React.createElement(window[this.state.component.name])}
            </div>
        );
    }

}

export default DynamicComponent;