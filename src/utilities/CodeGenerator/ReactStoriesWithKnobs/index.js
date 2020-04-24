// Elements to  react component.
export function convertToReactStories (component){

    let ReactStories = 
    `import React from 'react';
    import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

    import ${component.name} from "./${component.name}";
    
    export default {
        title: '${component.name}',
        component: ${component.name},
        decorators: [withKnobs]
    }
    
    ${component.variants.map(function (variant){
        
        /**
         * For each property in the variant.state
         * Replace it with typeof state.property (state.property, state.property.value)
         */

        let state = JSON.parse(JSON.stringify(variant.state));

        let newState = {};

        Object.keys(state).forEach(property => {
            newState[property] = `${typeof state[property]}(${property},${state[property]})`
        })

        

        return `export const ${variant.name} = () => <${component.name} state={${JSON.stringify(newState).split('"').join("")}}></${component.name}>;`
    }).join("\n\n")}`

    debugger;
    return ReactStories;
}
