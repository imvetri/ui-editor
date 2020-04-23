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
        return `export const ${variant.name} = () => <${component.name} state={${JSON.stringify(variant.state)}}></${component.name}>;`
    }).join("\n\n")}`

    return ReactStories;
}
