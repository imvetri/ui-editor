import {writeData} from "../utilities/Storage";



export function onDeleteComponent(event) {
    
    // stop event propagation. else onSelectionChange gets re triggered.
    
    event.stopPropagation();
    let componentName = event.target.parentElement.parentElement.innerText.split("\n")[0];

    if(this.state.components.find(component=>component.name===componentName).length<1){
        return;
    }
    // Get all the elements
    let components = Array.from(this.state.components);
    
    // Find the index of element to be deleted.
    let index = components.findIndex(component=>component.name===componentName)

    // Remove the element from the list
    components.splice(index,1);

    // Update the state with new elements.
    this.setState({
        components: components
    })

    // Persist the changes.
    writeData("ui-editor", components)

}

export function onDeleteFolder(TYPE){
    debugger;
    switch (TYPE) {
        case "FOLDER":
            break;
        
        case "FOLDER_AND_CONTENTS":
            break;

        case "CONTENTS":
            break;
    }
    debugger;
}