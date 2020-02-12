// Libraries.

import React, { Component } from "react";

// Dependencies.
import "../Index/index.css";

// Components.

import Assets from "./Assets";
import Components from "./Components";
import DraggableComponent from "./DraggableComponent";
import Editor from "./Editor";
import Events from "./Events";
import History from "./History";
import Preview from "./Preview";
import StyleExplorer from "./StyleExplorer";

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Reducer";

// Utils
import {readData, writeData} from "../utilities/localStorage";

class Tool extends Component {
    constructor(props) {
        super(props);
        let elements = readData("ui-editor") || [];
        let elementNames = elements.map(element=>element.name);
        this.state = {
            elements: elements,
            selectedTag : "",
            element: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            selectedComponent: {},
            folders: readData("folders") || [{
                type: "noFolder",
                contents: elementNames,
                name: ""
            }]
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

    updateStyles(){
        this.setState({
            element: this.state.selectedComponent
        })
    }

    updateFolders(folders){
        this.setState({
            folders: folders
        })
        writeData("folders", folders)
    }

    render() {
        
        const selectedElement = this.state.selectedComponent || this.state.element;
        try {
            return (
                <div>
                    <DraggableComponent>
                        <Components
                            elements={this.state.elements}
                            folders={this.state.folders}
                            selectedComponent={this.state.selectedComponent}
                            title="Components"

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
                            element={selectedElement}
                            selectedTag={this.state.selectedTag}
                            elements={this.state.elements}
                            onEventsUpdate={this.updateEvent}
                            onConfigUpdate={this.updateConfig}
                            title="Events"
                        />
    
                    </DraggableComponent>
    
                    <DraggableComponent>
                        <Editor
                            key={Math.ceil(Math.random() * 1000)}
                            element={selectedElement}
                            name={selectedElement.name}
                            markup={selectedElement.markup}
                            style={selectedElement.style}
                            state={selectedElement.state}
                            onSave={this.saveElement}
                            title="Editor"
                        />
                    </DraggableComponent>
    
                    <DraggableComponent>
                        <Preview 
                            key={Math.ceil(Math.random() * 1000)}
                            component={selectedElement}
                            title="Preview"
                        />
                    </DraggableComponent>
    
                    <DraggableComponent>
                        <StyleExplorer 
                            key={Math.ceil(Math.random() * 1000)} 
                            component={selectedElement}
                            onEdit={this.updateStyles.bind(this)}
                            title="StyleExplorer"
                        />
                    </DraggableComponent>
    
                    <DraggableComponent>
                        <History
                            title="History"
                        />
                    </DraggableComponent>
    
                </div>
            );
        }
        catch(e){
            console.log(e);
            return (
                <DraggableComponent>
                    <History
                        name="History"
                    />
                </DraggableComponent>
            )
        }
        
    }
}

export default Tool;