// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Components from "./Components";
import Events from "./Events";
import Assets from "./Assets";
import History from "./History";
import DynamicComponent from "./DynamicComponent";
import Preview from "./Preview";

import Markup from './Markup';
import Style from  "./Style";
import State from "./State";
import Composer from "./Composer";


// Utility components.

import {convertToReact, convertToReactRedux} from "./utilities/CodeGenerator/React/export";
import { getNestedComponents} from "./utilities/Runtime"

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import { readData, writeData } from "./utilities/Storage";

// Constants

class Index extends Component {
    constructor(props) {
        super(props);
        let components = [];
        this.state = {
            components: components,
            selectedTag: "",
            component: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            selectedComponent: "",
            folders: readData("folders"),
            selectedTab: "Events"
        }
        this.updateConfig = updateConfig.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.saveElement = saveElement.bind(this);

        window.refreshComponents = this.refreshComponents.bind(this);
    }


    exportReact(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        // nested components contain duplicates. we need to remove it
        let uniqueComponents = {}
        nestedComponents.forEach(component=>{
            if(!uniqueComponents[component.name]){
                uniqueComponents[component.name]=component;
            }
        })
        console.log(Object.values(uniqueComponents).map(convertToReact).join("\n\n"))
    }

    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        const randomKey = Math.ceil(Math.random() * 1000);
        return (
            <div>
                <Markup markup={selectedComponent.markup} key={randomKey}></Markup>
                <Style style={selectedComponent.style} key={randomKey}></Style>
                <State state={selectedComponent.state} key={randomKey}></State>
                <DynamicComponent onSave={this.props.onSave} key={randomKey} component={selectedComponent}/>

                <Events
                    key={randomKey}
                    component={selectedComponent}
                    selectedTag={this.state.selectedTag}
                    components={this.state.components}
                    onEventsUpdate={this.updateEvent}
                    onConfigUpdate={this.updateConfig}
                    title="Events"
                />
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));