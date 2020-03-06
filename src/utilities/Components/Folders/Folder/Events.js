
    export function dropHandler(ev) {
        ev.preventDefault();
        let componentName = ev.dataTransfer.getData("component-name");
        let folderName = ev.dataTransfer.getData("folder-name");
        let contents = Array.from(this.state.contents);

        // Check if the dropped item is a component
        if(componentName){
            contents.push(componentName)
        }
        // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
        else if(folderName && folderName!==this.state.folderName){
            contents.push({
                name: folderName,
                contents:[],
                type:"folder",
                status:"closed"
            })
        }
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"folder",
            status:"open"
        })

        console.log("Drop from folder");
    }

    export function dragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
            folderClass: "newFolder dragOver",
            status: "open"
        })
        console.log("Drag");
    }

    export function dragLeaveHandler(e) {
        console.log("drag");
        this.setState({
            folderClass: "newFolder",
            status: "closed"
        })
    }


export function onDragStart(e){

    let name = event.target.getAttribute("data-folder-name")
    e.dataTransfer.setData("folder-name", name);
}



import { getNestedComponents } from "../../../../utilities/Runtime";
import { convertToReact } from "../../../../utilities/CodeGenerator/React";
import { convertToReactStories } from "../../../../Utilities/CodeGenerator/ReactStories";
import { readData } from "../../../../utilities/Storage";
import { downloadFile } from "../../../Libraries/downloadFile";
import { zipFiles } from "../../../Libraries/zipFiles";


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
    }
}