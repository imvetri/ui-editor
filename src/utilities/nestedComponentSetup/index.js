// Dependencies.

import {createComponent} from "../convert-to-react-component";

export function checkNestedComponents( markup) {
    let components= JSON.parse(localStorage.getItem("ui-editor"));
    return components.filter(component=> markup.includes(component.name)).length >0;
}

/** Takes a component and converts it as a react component */
function saveToWindow( component ) {
    window[component.name] = createComponent(component);
}

/** Takes components and saves them to window as react Object */
export function saveComponentsToWindow( nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(saveToWindow);
}

/** Takes markup and returns children component objects. */
export function getNestedComponents (parent) {
    // Should be able to detect nested component.

    let components= JSON.parse(localStorage.getItem("ui-editor"));
    let nestedComponents = [parent];
    if(checkNestedComponents(parent.markup)){
        // find all the nested components from the markup and push it to nestedComponents.
        let children = components.filter(component=> parent.markup.includes(component.name));
        // Find grand kids.
        let grandKids = children.map(getNestedComponents).flat(3)
        nestedComponents.push(...grandKids)
    }
    return nestedComponents.filter(component=>component && component.markup);
}

export function getComponentByName (componentName) {
    let components= JSON.parse(localStorage.getItem("ui-editor"));
    return components.filter(component=> markup.includes(component.name)).length >0;
}