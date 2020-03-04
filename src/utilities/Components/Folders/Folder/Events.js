
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
import { readData } from "../../../../utilities/Storage";
import { downloadFile } from "../../../Libraries/downloadFile"


export function onExport(componentName) {
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

export function onExportNWB(componentName) {
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

    let componentStrings = uniqueComponents.map(convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default "+ componentStrings[0];

    let ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");
    console.log(ReactClassComponentString);

    downloadFile(`${componentName}.js`,ReactClassComponentString );
}