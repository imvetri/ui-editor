import {prepareMarkup} from "./prepareMarkup";

export function prepareElement(element) {
    let state = {};

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