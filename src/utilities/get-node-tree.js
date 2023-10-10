import React from "react";


window.React = React;
window.Component = React.Component;

export function getNodeTree(element, jsx, style, state, events) {
    
    let result, error;
    try{
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