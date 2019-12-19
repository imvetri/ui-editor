import React from "react";

import { saveComponentsToWindow, getNestedComponents } from "./nestedComponentSetup";
import { readData, writeData } from "./localStorage";


// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = React;
window.Component = React.Component;
window.saveVariants = function (source, target, state, event) {

    debugger;
    var components = readData("ui-editor");

    if(source===target){
        var component = components.find(component=>component.name === source.name);
        component.variants = component.variants || [component.state];
        component.variants.push(state);
        component.variants = [...new Set(component.variants.map(JSON.stringify))].map(JSON.parse).filter(Boolean);
        writeData("ui-editor",components);
    }
    else{


        // source is the parent and target is the child.
        // Actual fix
        // 1. find parent that has state[target] !== undefined

        var sourceComponent = components.find(component=>component.name === source.name);
        var targetComponent = components.find(component=>component.name === target.name);


        // temporaryFix

        sourceComponent.variants = sourceComponent.variants || [JSON.parse(sourceComponent.state)];

        let sourcestate = JSON.parse(sourceComponent.state);

        let newState = {};
        newState[targetComponent.name] = state;

        sourcestate = Object.assign(sourcestate,newState)

        sourceComponent.variants.push(sourcestate);
        sourceComponent.variants = [...new Set(sourceComponent.variants.map(JSON.stringify))].map(JSON.parse).filter(Boolean);
        writeData("ui-editor",components)
    }
}

export function getNodeTree(element, jsx, style, state, events) {
    
    let result, error;
    try{
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