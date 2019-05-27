import {prepareMarkup} from "./prepareMarkup";

export function prepareElement(element, name) {
    let state = {};


    // touch this code to add markup, events, state.
    element.markup = prepareMarkup(element, name);

    let defaults = {
        state: state,
        style: {}
    };
    return Object.assign(defaults, element);
}