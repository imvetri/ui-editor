// Dependencies.
import {storeEventsGlobal } from "./store-events-global";
import {createStylesheet} from "../common/js/create-stylesheet";
import {compileJSX} from "../common/js/compile-jsx";

// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(jsx, style, state, events) {

    // Automatically create ID creation rather than making user to include it.

    storeEventsGlobal(events);

    createStylesheet(style);

    return compileJSX(jsx, style, state, events);
}