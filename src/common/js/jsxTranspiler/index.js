import {createStylesheet} from "../create-stylesheet";
import {compileJSX} from "../compile-jsx";

// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(jsx, style, state, events) {

    createStylesheet(style);

    return compileJSX(jsx, style, state, events);
}