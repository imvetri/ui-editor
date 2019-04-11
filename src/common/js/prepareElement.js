import {prepareMarkup} from "./prepareMarkup";

export function prepareElement(element) {
    let state = {};

    element.markup = prepareMarkup(element.markup, element.events);

    let defaults = {
        state: state,
        children: [],
        style: {}
    };
    return Object.assign(defaults, element);
}