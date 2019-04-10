import {prepareMarkup} from "./prepareMarkup";

export function prepareElement(element) {
    let state = {};

    try {
        Object.keys(element.states[0]).forEach((value) => {
            state[value.split("state.")[1]] = "dummy";
        });
    }
    catch (e) {
        console.log(e);
        console.info("You missed a Ritual. Select the element, then click on edit and save atleast once");
    }

    element.markup = prepareMarkup(element.markup);
    delete element.states;

    // Convert events array to object
    let events = {};
    element.events.forEach(event => {
        // Convert events prop values from string to function
        events[event.name] = new Function(event.reducer);
    });

    element.events = events;

    let defaults = {
        state: state,
        children: [],
        style: {}
    };
    return Object.assign(defaults, element);
}