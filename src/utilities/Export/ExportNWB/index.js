import { getNestedComponents } from "../../Runtime";
import { convertToReact } from "../../CodeGenerator/React";
import { downloadFile } from "../../Libraries/downloadFile";
import { readData } from "../../Storage";

export function exportNWB(componentName) {
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