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

// Behaviour components

import Center from "./Utilities/Components/Center";
import Bottom from "./Utilities/Components/Bottom";
import Left from "./Utilities/Components/Left";
import Right from "./Utilities/Components/Right";

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
            showEditor: false
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
    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        return (
            <div>
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

                {this.state.selectedComponent ?
                    <Right>
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

            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));