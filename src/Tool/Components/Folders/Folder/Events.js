
    export function dropHandler(ev) {
        ev.preventDefault();
        let componentName = ev.dataTransfer.getData("component-name");
        let contents = Array.from(this.state.contents);
        contents.push(componentName)
        this.props.onFolderUpdate({
            name: this.state.name,
            contents : contents,
            type:"folder"
        })
        this.setState({
            folderClass: "newFolder",
            contents: contents
        })
        console.log("Drop");
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


    import { getNestedComponents } from "../../../../utilities/nestedComponentSetup";
    import { getComponentString } from "../../../../utilities/convert-to-react-component";
    
    
    export function onExport() {
        let nestedComponents = getNestedComponents(this.state.selectedComponent);
        let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
            return this.state.elements.find(element=>element.name===name)
        })
        const removeParanthesis = (component)=>{
           return component.replace("(","").replace("})","}")
        }
        console.log(uniqueComponents.map(function(component){
            return getComponentString(component)
        }).map(removeParanthesis).join(""));
    }

    import {writeData} from "../../../../utilities/localStorage";



export function onDelete(event) {
    let componentName = event.target.parentElement.parentElement.innerText.split("\n")[0];

    if(this.state.elements.find(component=>component.name===componentName).length<1){
        return;
    }
    // Get all the elements
    let elements = Array.from(this.state.elements);
    
    // Find the index of element to be deleted.
    let index = elements.findIndex(component=>component.name===componentName)

    // Remove the element from the list
    elements.splice(index,1);

    // Update the state with new elements.
    this.setState({
        elements: elements
    })

    // Persist the changes.
    writeData("ui-editor", elements)

}