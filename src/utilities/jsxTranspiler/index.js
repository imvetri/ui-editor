// Dependencies.
import {storeEventsGlobal } from "./store-events-global";
import {createStylesheet} from "./create-stylesheet";
import {getNodeTree} from "../get-node-tree";


function checkNestedComponents(components, markup) {
    return components.filter(component=> markup.includes(component.name)).length >0;
}

function saveToWindow( component ) {
    window[component.name] = transpileJSX(component.markup, component.style, component.state, component.events).result;
}

function saveComponentsToWindow( markup, nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(saveToWindow);
}

export function availNestedComponent ( markup ) {

    // Should be able to detect nested component.

    let components= JSON.parse(localStorage.getItem("ui-editor"));

    if(checkNestedComponents(components, markup)){
        // find all the nested components from the markup.
        let nestedComponents = components.filter(component=> markup.includes(component.name));
        
        saveComponentsToWindow(markup, nestedComponents);
    }

}
// IMPORTANT - Do not rename style,state,events. 

export function transpileJSX(markup, style, state, events) {

    // Automatically create ID creation rather than making user to include it.

    storeEventsGlobal(events);

    createStylesheet(style);

    return getNodeTree(markup, style, state, events);
}