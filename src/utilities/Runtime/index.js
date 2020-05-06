// Dependencies.

import {createComponent} from "../create-component";
import {readData, writeData} from "../Storage";
import {getObjectFormat, convertToStyleString} from "../Components/StyleExplorer/Style";

/**
 * Store component state as variants. Because variants are visually different form of a component.
 * Since visually different forms are driven by the state, its simple to just keep track of the states.
 */
window.saveVariant = function saveVariant(componentName, state) {
    // 1. Read all components.
    let components = readData("ui-editor");
    // 2. Find the passed component.
    let component = components.find(component=>component.name.includes(componentName));
    // 3. Fetch the statestate.
    let componentState = JSON.parse(component.state);
    // 4. Throw error if component doesnt contain a variant property
    if(componentState.variant=== undefined || state.variant === undefined){
        console.error("Add a variant property with a text value")
    }
    // 5. Create a new variant.
    component.variants = component.variants || [{
        name: componentState.variant,
        state: componentState
    }];
    // 6. push state into component.variant if it is new
    if(!component.variants.find(variant=>variant.name===state.variant)){
        component.variants.push({
            name: state.variant,
            state:state
        });
    }
    // 7. persist.
    writeData("ui-editor", components)
};

/**
 * 
 * Asset in style sheet syntax - $asset
 */

 function scopeSelectos(style,name){
    let declarations = getObjectFormat(style);
    declarations.forEach(declaration=>{
        declaration.selector = `.${name} ${declaration.selector}`
    })
    return convertToStyleString(declarations);
 }

function createStylesheet(style, name) {

    // check if window has $assets 
    if(window.assets){

        // Check if style has $assets
        while(style.includes("$assets")){
            // Replace it with asset blob url
            let asset = style.split("['")[1].split(`]`)[0].split("");
            asset.pop();
            asset =  asset.join("");
            style = style.replace(`$assets['${asset}']`, `url(${window.assets[asset]})`)
        }
    }

    let toDelete = [...document.querySelectorAll(`[data-component-name='${name}']`)];
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
    if(hasAssets(component.state)){
        component.state = convertAssetsToBlobs(component.state)
    }
    createStylesheet(component.style, component.name)
    window[component.name] = createComponent(component);
}

function checkNestedComponents( markup) {

    var components = readData("ui-editor");

    return components.filter(component=> markup.includes(component.name)).length >0;
}

function hasAssets(state){
    return state.includes("$assets");
}

function convertAssetsToBlobs(state){

    if(typeof state !== "string"){
        console.error("state should be a string")
    }
    // check if window has $assets 
    if(window.assets){

        // Check if style has $assets
        while(state.includes("$assets")){
            // Replace it with asset blob url
            let asset = state.split("['")[1].split(`]`)[0].split("");
            asset.pop();
            asset =  asset.join("");
            state = state.replace(`"$assets['${asset}']"`, `"url(${window.assets[asset]})"`)
        }
    }
    return state;
}

/** Takes components and saves them to window as react Object */
export function saveComponentsToWindow( nestedComponents){
    // Transpile them and make them global.
    nestedComponents.forEach(function(component){
        saveToWindow(JSON.parse(JSON.stringify(component)))
    });
}

export function getChildren (parent){
    let components= readData("ui-editor");
    if(checkNestedComponents(parent.markup)){
        let children = components.filter(component=> parent.markup.includes(component.name)).map(component=>component.name);
        return children;
    }
    return [];
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
