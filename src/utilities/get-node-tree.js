import React from "react";

import { saveComponentsToWindow, getNestedComponents } from "./Runtime";

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = React;
window.Component = React.Component;

export function getNodeTree(element, jsx, style, state, events) {
    
    let result, error;
    try{
        window.visited = {}
        let nestedComponents = getNestedComponents(element);
        if (nestedComponents.length > 0) {
            saveComponentsToWindow(nestedComponents);
        }
        result = eval(Babel.transform(jsx, { presets: ['react'] }).code)
    } catch(e){
        error = e;
    }
    finally{
        return {
            error: error,
            result, result
        };
    }
}