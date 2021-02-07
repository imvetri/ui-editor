// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Components from "./Components";
import Editor from "./Editor";
import Events from "./Events";
import Assets from "./Assets";
import History from "./History";
import DynamicComponent from "./DynamicComponent";

// Behaviour components.

import Center from "./Utilities/Components/Center";
import Bottom from "./Utilities/Components/Bottom";
import Right from "./Utilities/Components/Right";

// Utility components.

import ContextMenu from "./utilities/Components/ContextMenu";
import {convertToReact} from "./utilities/CodeGenerator/React";
import { getNestedComponents} from "./utilities/Runtime"

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import { readData, writeData } from "./utilities/Storage";
import {onDeleteComponent, onDeleteFolder, onExtendComponent} from "./Components/Events";

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
            showEditor: false,
            showTools: true,
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
            if(e.altKey && e.keyCode==82){ // Alt + R
                this.setState({
                    showTools: !this.state.showTools
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

    openExportTab(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        console.log(nestedComponents.map(convertToReact).join("\n\n"))
    }

    onShowContextMenu(e){
        
        if(e.target.classList.contains("component") || e.target.classList.contains("componentName")) { // check if it is a component.
            this.state.contextMenuChildren = <ul className="contextMenuOptions">
                <li onClick={onDeleteComponent.bind(this)}><i className="fas fa-trash"></i>Delete</li>
                <li onClick={this.openExportTab.bind(this)}><i className="fas fa-file-export"></i>Export</li>
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

    onContextMenuMessage(message){
        switch (message) {
            case "HIDE":
                this.setState({
                    showContextMenu: false
                })
                break;
        }    

    }
    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        const randomKey = Math.ceil(Math.random() * 1000);

        if(!this.state.showTools){
            return <DynamicComponent onSave={this.props.onSave} key={randomKey} component={selectedComponent}/>
        }
        return (
            <div onContextMenu={this.onShowContextMenu.bind(this)} onClick={this.hideContextMenu.bind(this)}>
                <div className="leftItem">
                    <Components
                        components={this.state.components}
                        folders={this.state.folders}
                        selectedComponent={this.state.selectedComponent}
                        title="Components"
                        showControls={true}
                        key={randomKey}

                        onOpenEditor={this.openEditor.bind(this)}
                        onSelection={this.updateSelectedComponent}
                        onFoldersUpdate={this.updateFolders.bind(this)}
                    />
                </div>
                <DynamicComponent onSave={this.props.onSave} key={randomKey} component={selectedComponent}/>

                {this.state.selectedComponent ?
                    <Right 
                        selected={this.state.selectedTab}>
                         <Events
                            key={randomKey}
                            component={selectedComponent}
                            selectedTag={this.state.selectedTag}
                            components={this.state.components}
                            onEventsUpdate={this.updateEvent}
                            onConfigUpdate={this.updateConfig}
                            title="Events"
                        />
                        <History 
                            title="History"/>
                        <Assets 
                            title="Assets"/>
                    </Right>
                    :
                    null}

                {this.state.showEditor ?
                    <Bottom>
                        <Editor
                            key={randomKey}
                            element={selectedComponent}
                            name={selectedComponent.name}
                            markup={selectedComponent.markup}
                            style={selectedComponent.style}
                            state={selectedComponent.state}
                            title="Editor"
                            onSave={this.saveElement}
                        />
                    </Bottom>
                    :
                    this.state.selectedComponent ?
                        <Bottom>
                            <Center>
                                <button class="showEditor"onClick={() => this.setState({ showEditor: true })}>Open Editor</button>
                            </Center>
                        </Bottom>
                        :
                        null
                }
                {this.state.showContextMenu?<ContextMenu children={this.state.contextMenuChildren} position={this.state.contextMenuPosition} onMessage={this.onContextMenuMessage.bind(this)}/>:null}
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));