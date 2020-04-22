import { convertToReactStories } from "../../CodeGenerator/ReactStories";
import { convertToReact } from "../../CodeGenerator/React";

import { getNestedComponents } from "../../Runtime";
import { readData } from "../../Storage";
import { zipFiles } from "../../Libraries/zipFiles";

function getUniqueComponents(nestedComponents){
    return [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
}

const removeParanthesis = (component)=>{
    return component.replace("(","").replace("})","}")
}

let headerImports = ` /* eslint-disable */
import React, {Component} from 'react';
`;

export function exportStorybook(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    let nestedComponents = getNestedComponents(selectedComponent);

    let uniqueComponents = getUniqueComponents(nestedComponents);

    window.saveVariant = false;

    let componentStrings = uniqueComponents.map(convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default "+ componentStrings[0];

    let ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");

    window.saveVariant = true;
    /**
     * function export storybook
     * 1. Export component.js
     * 2. Export component.stories.js
     */

    let ReactStoriesString = convertToReactStories(selectedComponent);
    zipFiles([
        {
            name: `${componentName}.js`,
            content: ReactClassComponentString
        },
        {
            name: `${componentName}.stories.js`,
            content: ReactStoriesString
        }
    ])
};