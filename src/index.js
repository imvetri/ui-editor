// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Elements from "./Elements";
import Preview from "./Preview";
import DraggableComponent from "./DraggableComponent";
import Editor from "./Editor";
import Events from "./Events";

// Reducers.
import { updateEvent, updateConfig, saveElement } from "./elements/Reducer";


class Index extends Component {
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

    }

    updatePreview(element) {
        this.setState({
            previewComponent: element
        });
    }

    render() {

        const selectedElement = this.state.elements[this.state.selectedIndex] || this.state.element;

        return (
            <div>
                <div className="showBackground">
                    <DraggableComponent>
                        <Elements
                            elements={this.state.elements}
                            createMode={false}
                            onPreview={this.updatePreview.bind(this)}
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
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));