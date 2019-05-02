// Dependencies.

import {convertToJson} from "../utilities/convert-to-json";

export function updateselectedIndex (e) {
    // Find the element from state that matches the currently selected element.
    let selectedIndex = Number(e.target.getAttribute("index"));

    // Update the state with selectedElement.
    this.setState({
        selectedIndex,
        name: this.state.elements[selectedIndex].name,
        markup: this.state.elements[selectedIndex].markup
    })

    this.setEditMode();
}

export function saveElement (element) {
    
    
    let newComponents = Array.from(this.state.elements);
    
    if(this.state.editMode){
        // Find the element.
        let elementUnderEdit = newComponents[this.state.selectedIndex];

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element)

        // Push it to original list.
        newComponents[this.state.selectedIndex] = elementUnderEdit;
    }
    else {
        let newElement = {
            name: element.name,
            markup: element.markup,
            events: [],
            state: element.state,
            style: element.style,
            id: Math.ceil(Math.random()*1000)
        };

        newComponents.push(newElement);
    }

    // Update the state with new values.
    // 1. Initialise the editState with default values/ empty it.
    // TODO: remove editMode.
    this.setState({
        elements: newComponents,
        editMode: false,
        element: {
            name: element.name,
            markup: element.markup,
            style: element.style,
            state: element.state,
            event: element.events
        },
        show: false
    });

    localStorage.setItem("ui-editor", JSON.stringify(newComponents));

    // hide the editor.
    this.toggleEditor();
}


export function updateEvent (events) {
    // Create new state.
    let newComponents = Object.assign({}, this.state).elements;

    newComponents[this.state.selectedIndex].events = events;

    // Set state to the new state.
    this.setState({
        elements: newComponents
    });

    localStorage.setItem("ui-editor", JSON.stringify(this.state.elements));
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