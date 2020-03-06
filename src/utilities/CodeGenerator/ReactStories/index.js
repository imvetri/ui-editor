// Elements to  react component.
export function convertToReactStories (component){

    let ReactStories = 
    `import React from 'react';

    import ${component.name} from "./${component.name}";
    
    export default {
        title: '${component.name}',
        component: ${component.name}
    }
    
    ${component.variants.map(function (variant){
        return `export const ${variant.name} = () => <${component.name} state={${JSON.stringify(variant.state)}}></${component.name}>;`
    }).join("")}`

    return ReactStories;
}
