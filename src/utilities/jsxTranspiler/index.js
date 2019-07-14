// Dependencies.
import {storeEventsGlobal } from "./store-events-global";
import {createStylesheet} from "./create-stylesheet";
import {getNodeTree} from "../get-node-tree";

// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(markup, style, state, events, name) {

    // Automatically create ID creation rather than making user to include it.

    storeEventsGlobal(events, name);

    createStylesheet(style);

    return getNodeTree.call(this,markup, style, state, events);
}