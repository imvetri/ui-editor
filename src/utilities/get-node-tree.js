import React from "react";

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = React;
window.Component = React.Component;
window.saveVariants = function (componentFn, state) {

    var components =JSON.parse(localStorage.getItem("ui-editor")) 
    var component = components.find(component=>component.name === componentFn.name);
    component.variants = component.variants || [];
    component.variants.push(state);
    component.variants = [...new Set(component.variants.map(JSON.stringify))].map(JSON.parse)
    localStorage.setItem("ui-editor", JSON.stringify(components));
}

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