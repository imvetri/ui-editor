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
import Builder from "./Builder";
import Preview from "./Preview";

import Markup from './Markup';
import Style from  "./Style";
import State from "./State";
import Composer from "./Composer";

// Utility components.

import {convertToReact, convertToReactRedux} from "./utilities/CodeGenerator/React/export";
import { getNestedComponents, initialiseComponents} from "./utilities/Runtime"

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import { readData, writeData } from "./utilities/Storage";
import {onDeleteComponent, onDeleteFolder, onExtendComponent} from "./Components/Events";

// Constants
import { CONSTANTS } from "./utilities/Constants"; 

class Index extends Component {
    constructor(props) {
        super(props);
        let components = readData("ui-editor");
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
        this.updateSelectedComponent = updateSelectedComponent.bind(this);
        document.onkeydown = function keydown(e){
            if(e.altKey && e.keyCode==69) { // Alt + E
                // Open/close editor if any component is selected
                this.setState({
                    showEditor: !this.state.showEditor
                })
            }
        }.bind(this);

        window.refreshComponents = this.refreshComponents.bind(this);
    }

    refreshComponents() {
        this.setState({
            components: window.components
        })
    }

    updateFolders(folders) {
        this.setState({
            folders: folders
        })
        writeData("folders", folders)
    }

    openEditor() {
        this.setState({
            showEditor: true
        })
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

    exportReactRedux(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        // nested components contain duplicates. we need to remove it
        let uniqueComponents = {}
        nestedComponents.forEach(component=>{
            if(!uniqueComponents[component.name]){
                uniqueComponents[component.name]=component;
            }
        })
        console.log(Object.values(uniqueComponents).map(convertToReactRedux).join("\n\n"))
    }

    onShowContextMenu(e){
        
        if(e.target.classList.contains("component") || e.target.classList.contains("componentName")) { // check if it is a component.
            this.state.contextMenuChildren = <ul className="contextMenuOptions">
                <li onClick={onDeleteComponent.bind(this)}><i className="fas fa-trash"></i>Delete</li>
                <li onClick={this.exportReact.bind(this)}><i className="fas fa-file-export"></i>Export</li>
                <li onClick={this.exportReactRedux.bind(this)}><i className="fas fa-copy"></i>Export ReactJS + Redux</li>
                <li onClick={onExtendComponent.bind(this)}><i className="fas fa-copy"></i>Extend</li>
            </ul>;
        }
        else if(e.target.classList.contains("fa-folder-open") || e.target.classList.contains("fa-folder")) {// check if it is a folder.
            let folderName = e.target.parentElement.getAttribute("data-folder-name");

            this.state.contextMenuChildren =  <ul className="contextMenuOptions">
            <li onClick={onDeleteFolder.bind(this, "FOLDER_RETAIN_CONTENTS", folderName)}>Delete folder and retain contents</li>
            <li onClick={onDeleteFolder.bind(this, "RETAIN_FOLDER_DELETE_CONTENTS",folderName)}>Keep Folder and delete contents</li>
            <li onClick={onDeleteFolder.bind(this, "ENTIRE_FOLDER",folderName)}>Delete Folder and contents</li>
            <li onClick={this.openExportTab.bind(this)}>Export Folder</li>
        </ul>;

        }
         
        this.setState({
            showContextMenu:true,
            contextMenuPosition: {
                top: `${e.clientY}px`,
                left: `${e.clientX}px`
            }
        })

        e.preventDefault();
    }

    hideContextMenu(){
        if(this.state.showContextMenu){
            this.setState({
                showContextMenu: false
            })
        }
    }

    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        const randomKey = Math.ceil(Math.random() * 1000);
        window.components.forEach(initialiseComponents)
        return (
            <div onContextMenu={this.onShowContextMenu.bind(this)} onClick={this.hideContextMenu.bind(this)}>
                <Preview></Preview>
                <Markup markup={selectedComponent.markup} key={randomKey}></Markup>
                <Style style={selectedComponent.style} key={randomKey}></Style>
                <State state={selectedComponent.state} key={randomKey}></State>
                <Composer state={selectedComponent.state}></Composer>
                <Components
                    components={this.state.components}
                    folders={this.state.folders}
                    selectedComponent={this.state.selectedComponent}
                    title="Components"
                    key={randomKey}

                    onOpenEditor={this.openEditor.bind(this)}
                    onSelection={this.updateSelectedComponent}
                    onFoldersUpdate={this.updateFolders.bind(this)}
                />
                <Builder onSave={this.saveElement.bind(this)}/>
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
                <History title="History"/>
                <Assets title="Assets"/>
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));