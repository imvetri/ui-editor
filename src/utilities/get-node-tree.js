import React from "react";

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = React;

export function getNodeTree(jsx, style, state, events) {
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