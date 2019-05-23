// Dependencies.
import {storeEventsGlobal } from "./store-events-global";
import {createStylesheet} from "./create-stylesheet";
import {getNodeTree} from "../get-node-tree";

import DynamicComponent from "../../DynamicComponent";

function checkNestedComponents(components, markup) {
    return components.filter(component=> markup.includes(component.name)).length >0;
}

function saveToWindow( component ) {
    let randomKey = component.id*(~~(Math.random()*10));
    window[component.name] = <DynamicComponent key={randomKey} component={component}/>
    
    // un comment next line, events will show nested component's events
    // window[component.name] = transpileJSX(component.markup, component.style, component.state, component.events).result;

}

function saveComponentsToWindow( nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(saveToWindow);
}

export function availNestedComponent ( element ) {

    // Should be able to detect nested component.

    let components= JSON.parse(localStorage.getItem("ui-editor"));

    if(checkNestedComponents(components, element.markup)){
        // find all the nested components from the markup.
        let nestedComponents = components.filter(component=> element.markup.includes(component.name));
        
        saveComponentsToWindow(nestedComponents);
    }

}
// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(markup, style, state, events) {

    // Automatically create ID creation rather than making user to include it.

    storeEventsGlobal(events);

    createStylesheet(style);

    return getNodeTree(markup, style, state, events);
}