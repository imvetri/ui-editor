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

    console.log(selectedElementIndex);

}

export function saveElement () {
    let newElements = Array.from(this.state.elements);
    
    if(this.state.editMode){
        // Find the element.
        const elementUnderEdit = newElements[this.state.selectedElementIndex];

        // Update the element with new markup.
        elementUnderEdit.markup = this.state.markup;

        // Get default state by parsing the markup.
        let defaultState = convertToJson(extractJsxAttributes(this.state.markup));

        // Add default state to element's states.
        elementUnderEdit.states.push( defaultState );

        // Update element name.
        elementUnderEdit.name = this.state.name;
    }
    else {
        let newElement = {
            name: this.state.name,
            markup: this.state.markup,
            states: [],
            events: [],
            style: this.state.style
        };

        newElements.push(newElement);
    }

    // Update the state with new values.
    this.setState({
        elements: newElements,
        editMode: false
    });

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