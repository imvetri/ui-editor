// Dependencies.

import DynamicComponent from "../../DynamicComponent";
import {createComponent} from "../convert-to-react-component";

export function checkNestedComponents( markup) {
    let components= JSON.parse(localStorage.getItem("ui-editor"));
    return components.filter(component=> markup.includes(component.name)).length >0;
}

function saveToWindow( component ) {
    let randomKey = component.id*(~~(Math.random()*10));
    window[component.name] = createComponent(component);
}

export function saveComponentsToWindow( nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(saveToWindow);
}

export function getNestedComponents (markup) {
    // Should be able to detect nested component.

    let components= JSON.parse(localStorage.getItem("ui-editor"));
    let nestedComponents = [];
    if(checkNestedComponents(markup)){
        // find all the nested components from the markup.
        nestedComponents = components.filter(component=> markup.includes(component.name));
    }
    return nestedComponents;
}
