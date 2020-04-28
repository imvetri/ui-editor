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
import Variants from "./Variants";

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

            if(e.altKey && e.keyCode==86){ // Alt + V
                this.setState({
                    openRight: !this.state.openRight,
                    selectedTab: "Variants"
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
            // delete folder, delete options
            this.state.contextMenuChildren = <ul className="contextMenuOptions">
                <li onClick={this.delete}>Delete Component</li>
                <li onClick={this.openExportTab.bind(this)}>Export Component</li>
            </ul>;
        }
        else if(e.target.getAttribute("data-folder-name")) {// check if it is a folder.
            // delete folder, delete options
            this.state.contextMenuChildren =  <ul className="contextMenuOptions">
            <li onClick={this.delete}>Delete Folder</li>
            <li onClick={this.delete}>Delete Contents</li>
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
                        key={Math.ceil(Math.random() * 1000)}
                        components={this.state.components}
                        folders={this.state.folders}
                        selectedComponent={this.state.selectedComponent}
                        title="Components"
                        showControls={true}

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
                        <History title="History"/>
                        <Assets title="Assets"/>
                        <Export title="Export"
                            component={selectedComponent}/>
                        <Variants title="Variants"
                            key={Math.ceil(Math.random() * 1000)}
                            component={selectedComponent}
                            onUpdate= {saveElement.bind(this)}/>
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