// Libraries.

import React, { Component } from "react";

// Dependencies.
import "../Index/index.css";

// Components.

import Assets from "../Assets";
import Components from "../Elements";
import DraggableComponent from "../DraggableComponent";
import Editor from "../Editor";
import Events from "../Events";
import History from "../History";
import Preview from "../Preview";
import StyleExplorer from "../StyleExplorer";
import TagExplorer from "../TagExplorer";

// Reducers.
import { updateEvent, updateConfig, saveElement, updateselectedIndex } from "../Elements/Reducer";

// Utils
import { getNodeTree } from "../utilities/get-node-tree.js";
import {readData} from "../utilities/localStorage";

class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: readData("ui-editor") || [],
            components: [],
            selectedIndex: -1,
            selectedTag : "",
            element: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            }
        }
        this.updateConfig = updateConfig.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.saveElement = saveElement.bind(this);
        this.updateselectedIndex = updateselectedIndex.bind(this);
    }

    updatePreview(element) {
        this.setState({
            previewComponent: element
        });
    }

    updateStyles(){
        this.setState({
            element: this.state.elements[this.state.selectedIndex]
        })
    }

    render() {

        let components = readData("ui-editor") || [];
        const selectedElement = components[this.state.selectedIndex] || this.state.element;
        let nodeTree = getNodeTree(selectedElement, selectedElement.markup, selectedElement.style, JSON.parse(selectedElement.state), selectedElement.events);
        
        try {
            return (
                <div>
                    <DraggableComponent>
                        <Components
                            elements={this.state.elements}
                            onSelection={this.updateselectedIndex}
                            selectedIndex={this.state.selectedIndex}
                            title="Components"
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
{/*     
                    <DraggableComponent>
                        <TagExplorer 
                            node={nodeTree} 
                            title="TagExplorer"
                        />
                    </DraggableComponent> */}
    
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