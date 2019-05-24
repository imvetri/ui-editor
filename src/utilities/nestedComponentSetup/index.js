// Dependencies.

import DynamicComponent from "../../DynamicComponent";

export function checkNestedComponents( markup) {
    let components= JSON.parse(localStorage.getItem("ui-editor"));
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


    if(checkNestedComponents(element.markup)){
        // find all the nested components from the markup.
        let nestedComponents = components.filter(component=> element.markup.includes(component.name));
        
        saveComponentsToWindow(nestedComponents);
    }

}