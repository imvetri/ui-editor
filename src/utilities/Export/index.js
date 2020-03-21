
import { getNestedComponents } from "../Runtime";
import { convertToReact } from "../CodeGenerator/React";
import { convertToReactStories } from "../CodeGenerator/ReactStories";
import { readData } from "../Storage";
import { downloadFile } from "../Libraries/downloadFile";
import { zipFiles } from "../Libraries/zipFiles";


function exportSimple(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    let nestedComponents = getNestedComponents(selectedComponent);

    let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
    const removeParanthesis = (component)=>{
        return component.replace("(","").replace("})","}")
    }
    console.log(uniqueComponents.map(convertToReact).map(removeParanthesis).reverse().join(""));
}

function exportNWB(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    let nestedComponents = getNestedComponents(selectedComponent);

    let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
    const removeParanthesis = (component)=>{
        return component.replace("(","").replace("})","}")
    }

    let headerImports = `import React, {Component} from 'react';\n`;

    window.ExportNWB = true;

    let componentStrings = uniqueComponents.map(convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default "+ componentStrings[0];

    let ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");
    console.log(ReactClassComponentString);

    window.ExportNWB = false;

    downloadFile(`${componentName}.js`,ReactClassComponentString );
}

function exportStorybook(componentName) {
    let components = readData("ui-editor");
    let selectedComponent = components.find(component=>component.name.includes(componentName));
    let nestedComponents = getNestedComponents(selectedComponent);

    let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
        return components.find(element=>element.name===name)
    })
    const removeParanthesis = (component)=>{
        return component.replace("(","").replace("})","}")
    }

    let headerImports = ` /* eslint-disable */
    import React, {Component} from 'react';
    `;

    window.ExportNWB = true;

    let componentStrings = uniqueComponents.map(convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default "+ componentStrings[0];

    let ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");

    window.ExportNWB = false;
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
}

export function onExport(componentName){
    switch (window.EXPORT_TYPE) {
        case "SIMPLE": 
            exportSimple(componentName);
            break;

        case "NWB":
            exportNWB(componentName);
            break;

        case "STORYBOOK":
            exportStorybook(componentName);
            break;

        case "COMPLEX":
            exportFunctionalComponent(componentName);
            break;
    }
}