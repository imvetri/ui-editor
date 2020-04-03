// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Components from "./Components";
import DraggableComponent from "./Utilities/Components/DraggableComponent";
import Editor from "./Editor";
import Events from "./Events";
import Toolkit from "./Toolkit";
import Preview from "./Preview";

// Behaviour components

import Center from "./Utilities/Components/Center";
import Bottom from "./Utilities/Components/Bottom";
import Left from "./Utilities/Components/Left";
import Right from "./Utilities/Components/Right";

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import {readData, writeData} from "./utilities/Storage";

class Index extends Component {
    constructor(props) {
        super(props);
        let components = readData("ui-editor");
        this.state = {
            components: components,
            selectedTag : "",
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
    }

    updatePreview(element) {
        this.setState({
            previewComponent: element
        });
    }

    updateFolders(folders){
        this.setState({
            folders: folders
        })
        writeData("folders", folders)
    }

    openEditor(){
        this.setState({
            showEditor: true
        })
    }
    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        try {
            return (
                <div>
                    <Left>
                        <Components
                            key={Math.ceil(Math.random() * 1000)}
                            components={this.state.components}
                            folders={this.state.folders}
                            selectedComponent={this.state.selectedComponent}
                            title="Components"

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

                    {this.state.selectedComponent? 
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
                        </Right>
                        :
                        null}                        

                    {this.state.showEditor? 
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
                                <button onClick={()=>this.setState({showEditor:true})}>Open Editor</button>
                            </Center>
                        </Bottom>
                    :
                    null
                    }
                    <DraggableComponent>
                        <Toolkit
                            title="Toolkit"
                        />
                    </DraggableComponent>
    
                </div>
            );
        }
        catch(e){
            console.log(e);
            return (
                <DraggableComponent>
                    <Toolkit
                        name="Toolkit"
                    />
                </DraggableComponent>
            )
        }
        
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));