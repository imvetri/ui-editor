// Dependencies.

import {extractJsxAttributes} from "../common/js/extract-jsx-attributes";
import {convertToJson} from "../common/js/convert-to-json";

export function updateSelectedElementIndex (e) {
    // Find the element from state that matches the currently selected element.
    let selectedElementIndex = Number(e.target.getAttribute("index"));

    // Update the state with selectedElement.
    this.setState({
        selectedElementIndex,
        name: this.state.elements[selectedElementIndex].name,
        markup: this.state.elements[selectedElementIndex].markup
    })

    this.setEditMode();
}

export function saveElement (element) {
    
    
    let newElements = Array.from(this.state.elements);
    
    if(this.state.editMode){
        // Find the element.
        let elementUnderEdit = newElements[this.state.selectedElementIndex];

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element)

        // Push it to original list.
        newElements[this.state.selectedElementIndex] = elementUnderEdit;
    }
    else {
        let newElement = {
            name: element.name,
            markup: element.markup,
            states: [],
            events: [],
            styleClass: element.styleClass,
            state: element.state,
            style: element.style,
            id: Math.ceil(Math.random()*1000)
        };

        newElements.push(newElement);
    }

    // Update the state with new values.
    // 1. Initialise the editState with default values/ empty it.
    // TODO: remove editMode.
    this.setState({
        elements: newElements,
        editMode: false,
        element: {
            name: element.name,
            markup: element.markup,
            styleClass: element.styleClass,
            style: element.style,
            state: element.state,
            event: element.events
        },
        show: false
    });

    localStorage.setItem("ui-editor", JSON.stringify(newElements));

    // hide the editor.
    this.toggleEditor();
}


export function addEvent (events) {
    // Create new state.
    let newElements = Object.assign({}, this.state).elements;

    newElements[this.state.selectedElementIndex].events = events;

    // Set state to the new state.
    this.setState({
        elements: newElements
    });
}

export function toggleEditor () {
    this.setState({
        show: !this.state.show
    });
}

export function setEditMode () {
    this.setState({
        editMode: true,
        show: true
    })
}