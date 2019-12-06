// Libraries.

import React, { Component } from "react";

// Dependencies.
import "../Index/index.css";

// Components.

import Components from "../Elements";
import Preview from "../Preview";
import DraggableComponent from "../DraggableComponent";
import Editor from "../Editor";
import Events from "../Events";
import TagExplorer from "../TagExplorer";
import StyleExplorer from "../StyleExplorer";

// Reducers.
import { updateEvent, updateConfig, saveElement, updateselectedIndex, setEditMode } from "../Elements/Reducer";

// Utils
import { getNodeTree } from "../utilities/get-node-tree.js";

class Tool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: JSON.parse(localStorage.getItem("ui-editor")) || [],
            components: [],
            selectedIndex: -1,
            element: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            previewComponent: {
                name: "",
                markup: "",
                style: "",
                state: "{}",
                events: [{
                    id: "ID1",
                    name: "",
                    reducer: ""
                }]
            }
        }
        this.updateConfig = updateConfig.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.saveElement = saveElement.bind(this);
        this.updateselectedIndex = updateselectedIndex.bind(this);
        this.setEditMode = setEditMode.bind(this);
    }

    updatePreview(element) {
        this.setState({
            previewComponent: element
        });
    }

    render() {

        const selectedElement = this.state.elements[this.state.selectedIndex] || this.state.element;
        let nodeTree = getNodeTree(selectedElement.markup, selectedElement.style, JSON.parse(selectedElement.state), selectedElement.events);

        return (
            <div>
                <DraggableComponent>
                    <Components
                        elements={this.state.elements}
                        onPreview={this.updatePreview.bind(this)}
                        onSelection={this.updateselectedIndex}
                        selectedIndex={this.state.selectedIndex}
                    />
                </DraggableComponent>
                <DraggableComponent>

                    <Events
                        key={this.state.selectedIndex}
                        element={selectedElement}
                        elements={this.state.elements}
                        onEventsUpdate={this.updateEvent}
                        onConfigUpdate={this.updateConfig}
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
                    />
                </DraggableComponent>

                <DraggableComponent>
                    <Preview component={this.state.previewComponent} />
                </DraggableComponent>



                <DraggableComponent>
                    <TagExplorer node={nodeTree} />
                </DraggableComponent>

                <DraggableComponent>
                    <StyleExplorer style={selectedElement.style}/>
                </DraggableComponent>

            </div>
        );
    }
}

export default Tool;