// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.


import Assets from "./Assets";
import Components from "./Components";
import DraggableComponent from "./Utilities/Components/DraggableComponent";
import Editor from "./Editor";
import Events from "./Events";
import Toolkit from "./Toolkit";
import Preview from "./Preview";
import Variants from "./Variants";

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
                    <DraggableComponent>
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
                    </DraggableComponent>

                    <DraggableComponent>
                        <Assets                                 
                            title="Assets"
                        />
                    </DraggableComponent>
    
                    <DraggableComponent>
    
                        <Events
                            key={Math.ceil(Math.random() * 1000)}
                            component={selectedComponent}
                            selectedTag={this.state.selectedTag}
                            components={this.state.components}
                            onEventsUpdate={this.updateEvent}
                            onConfigUpdate={this.updateConfig}
                            title="Events"
                        />
    
                    </DraggableComponent>
    
                    <DraggableComponent>
                        <Preview 
                            key={Math.ceil(Math.random() * 1000)}
                            component={selectedComponent}
                            title="Preview"
                        />
                    </DraggableComponent>

                    {this.state.showEditor? 
                        <DraggableComponent>
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
                        </DraggableComponent>
                    : 
                    null}
                    
                    <DraggableComponent>
                        <Variants 
                            key={Math.ceil(Math.random() * 1000)}
                            component={selectedComponent}
                                onUpdate={this.saveElement}
                            title="Variants"
                        />
                    </DraggableComponent>

    
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