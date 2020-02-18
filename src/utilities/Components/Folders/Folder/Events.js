
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
                type:"folder"
            })
        }
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"folder"
        })

        console.log("Drop from folder");
    }

    export function dragOverHandler(ev) {
        ev.preventDefault();
        this.setState({
            folderClass: "newFolder dragOver"
        })
        console.log("Drag");
    }

    export function dragLeaveHandler(e) {
        console.log("drag");
        this.setState({
            folderClass: "newFolder"
        })
    }


export function onDragStart(e){

    let name = event.target.getAttribute("data-folder-name")
    e.dataTransfer.setData("folder-name", name);
}



import { getNestedComponents } from "../../../../utilities/Runtime";
import { convertToReact } from "../../../../utilities/CodeGenerator/React";
import { readData } from "../../../../utilities/Storage";


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
    console.log(uniqueComponents.map(function(component){
        return convertToReact(component)
    }).map(removeParanthesis).join(""));
}
