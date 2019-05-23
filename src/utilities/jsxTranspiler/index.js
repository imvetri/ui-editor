// Dependencies.
import {storeEventsGlobal } from "./store-events-global";
import {createStylesheet} from "./create-stylesheet";
import {getNodeTree} from "../get-node-tree";

// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(markup, style, state, events) {

    // Automatically create ID creation rather than making user to include it.

    storeEventsGlobal(events);

    createStylesheet(style);

    return getNodeTree(markup, style, state, events);
}