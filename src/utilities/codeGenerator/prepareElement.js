import {prepareMarkup} from "./prepareMarkup";

export function prepareElement(element) {
    let state = {};


    // touch this code to add markup, events, state.
    element.markup = prepareMarkup(element.markup, element.events);

    let defaults = {
        state: state,
        style: {}
    };
    return Object.assign(defaults, element);
}