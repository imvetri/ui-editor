// Dependencies.

import {convertToJson} from "../common/js/convert-to-json";

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
    
    
    let newElements = Array.from(this.state.elements);
    
    if(this.state.editMode){
        // Find the element.
        let elementUnderEdit = newElements[this.state.selectedIndex];

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element)

        // Push it to original list.
        newElements[this.state.selectedIndex] = elementUnderEdit;
    }
    else {
        let newElement = {
            name: element.name,
            markup: element.markup,
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


export function updateEvent (events) {
    // Create new state.
    let newElements = Object.assign({}, this.state).elements;

    newElements[this.state.selectedIndex].events = events;

    // Set state to the new state.
    this.setState({
        elements: newElements
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