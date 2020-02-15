
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


    import { getNestedComponents } from "../../utilities/nestedComponentSetup";
    import { getComponentString } from "../../utilities/convert-to-react-component";
    import { readData } from "../../utilities/localStorage";

    
    export function onExport(selectedComponent) {
        let nestedComponents = getNestedComponents(selectedComponent || this.state.selectedComponent);
        let components = readData("ui-editor");

        let uniqueComponents = [...new Set(nestedComponents.map(com=>com.name))].map(name=>{
            return components.find(element=>element.name===name)
        })
        const removeParanthesis = (component)=>{
           return component.replace("(","").replace("})","}")
        }
        console.log(uniqueComponents.map(function(component){
            return getComponentString(component)
        }).map(removeParanthesis).join(""));
    }
