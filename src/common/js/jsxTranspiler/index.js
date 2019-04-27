import {compileJSX} from "../compile-jsx";

// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(jsx, style, state, events) {

    return compileJSX(jsx, style, state, events);
}