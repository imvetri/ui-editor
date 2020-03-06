// Dependencies.

import {createComponent} from "../create-component";
import {readData, writeData} from "../Storage";

/**
 * Store component state as variants. Because variants are visually different form of a component.
 * Since visually different forms are driven by the state, its simple to just keep track of the states.
 */
window.saveVariant = function saveVariant(componentName, state) {
    // 1. Read all components.
    let components = readData("ui-editor");
    // 2. Find the passed component.
    let component = components.find(component=>component.name.includes(componentName));
    // 3. If component.variants does not exist, create an empty array.
    component.variants = component.variants || [component.state];
    // 4. push state into component.variant.
    component.variants.push(state);
    // 5. Retain only unique.
    component.variants = [...new Set(component.variants.map(JSON.stringify))].map(JSON.parse)
    // 6. persist.
    writeData("ui-editor", components)
};

/**
 * 
 * Asset in style sheet syntax - $asset
 */

function createStylesheet(style, name) {

    // Check if style has $assets
    while(style.includes("$assets")){
        // Replace it with asset blob url
        let asset = style.split("['")[1].split(`]`)[0].split("");
        asset.pop();
        asset =  asset.join("");
        style = style.replace(`$assets['${asset}']`, `url(${window.assets[asset]})`)
    }
    let toDelete = [...document.querySelectorAll("[data-component-name='ParentComponent']")];
    toDelete.forEach(item=>{
        item.remove()
    })
    var dynamicStyle = document.createElement('style');
    dynamicStyle.setAttribute("data-component-name", name);
    dynamicStyle.type = 'text/css';
    dynamicStyle.innerHTML = style;
    document.body.appendChild(dynamicStyle)
}

/** Takes a component and converts it as a react component */
function saveToWindow( component ) {
    createStylesheet(component.style, component.name)
    window[component.name] = createComponent(component);
}

function checkNestedComponents( markup) {

    var components = readData("ui-editor");

    return components.filter(component=> markup.includes(component.name)).length >0;
}

/** Takes components and saves them to window as react Object */
export function saveComponentsToWindow( nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(function(component){
        saveToWindow(component)
    });
}

/** Takes markup and returns children component objects. */
export function getNestedComponents (parent) {
    // Should be able to detect nested component.

    let components= readData("ui-editor");
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
