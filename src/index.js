// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Components from "./Components";
import Editor from "./Editor";
import Events from "./Events";
import Preview from "./Preview";
import Assets from "./Assets";
import Export from "./Export";
import History from "./History";

// Behaviour components.

import Center from "./Utilities/Components/Center";
import Bottom from "./Utilities/Components/Bottom";
import Left from "./Utilities/Components/Left";
import Right from "./Utilities/Components/Right";

// Utility components.

import ContextMenu from "./utilities/Components/ContextMenu";

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
                    openRight: !this.state.openRight,
                    selectedTab: "Events"
                })
            }
        }.bind(this);

    }

    updatePreview(element) {
        this.setState({
            previewComponent: element
        });
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
        this.setState({
            selectedTab: "Export"
        })
    }

    onShowContextMenu(e){
        
        if(e.target.classList.contains("component") || e.target.classList.contains("componentName")) { // check if it is a component.
            this.state.contextMenuChildren = <ul className="contextMenuOptions">
                <li onClick={onDeleteComponent.bind(this)}>Delete Component</li>
                <li onClick={this.openExportTab.bind(this)}>Export Component</li>
                <li onClick={onExtendComponent.bind(this)}>Extend Component</li>
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
        return (
            <div onContextMenu={this.onShowContextMenu.bind(this)} onClick={this.hideContextMenu.bind(this)}>
                <Left>
                    <Components
                        components={this.state.components}
                        folders={this.state.folders}
                        selectedComponent={this.state.selectedComponent}
                        title="Components"
                        showControls={true}
                        key={Math.ceil(Math.random() * 1000)}

                        onOpenEditor={this.openEditor.bind(this)}
                        onSelection={this.updateSelectedComponent}
                        onFoldersUpdate={this.updateFolders.bind(this)}
                    />
                </Left>
                <Center>
                    <Preview
                        key={Math.ceil(Math.random() * 1000)}
                        component={selectedComponent}
                        title="Preview"
                        onSave={this.saveElement}
                    >
                    </Preview>
                </Center>

                {this.state.selectedComponent  && this.state.openRight ?
                    <Right 
                        selected={this.state.selectedTab}>
                         <Events
                            key={Math.ceil(Math.random() * 1000)}
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
                        <Export 
                            title="Export"
                            component={selectedComponent}/>
                    </Right>
                    :
                    null}

                {this.state.showEditor ?
                    <Bottom>
                        <Editor
                            key={Math.ceil(Math.random() * 1000)}
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