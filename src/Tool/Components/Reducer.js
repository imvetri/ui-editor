// Dependencies.

import {writeData} from "../utilities/localStorage";

function createVariant(component){

    // 1. Update markup.
    let variant = JSON.parse(JSON.stringify(component));
    variant.name = "Variant"+variant.name
    variant.markup = variant.markup.replace(/>(.*?)</g, '>{state.variant}<')

    // 2. Update state.
    if(typeof variant.state === "string"){
        variant.state = JSON.parse(variant.state)
        variant.state.variant = "text"
    }
    else if(typeof variant.state === "object"){
        variant.state.variant = "text"
    }
    else{
        variant.state = {}
    }
    variant.state.variant = "text";

    variant.state = JSON.stringify(variant.state);

    return variant;
}

function generateVariant(index){
    /**
     * 1. Take the current element selected
     * 2. Remove plain texts and replace it with property
     * 3. Create the property in the state.
     */
    let currentComponent = this.state.elements[index];
    let variant = this.createVariant(currentComponent);

    let elements = this.state.elements;
    elements.push(variant);

    this.setState({
        elements:elements
    })
    writeData("ui-editor",elements);
}
