import {writeData} from "../utilities/Storage";
import {findFolder} from "../utilities/Components/Folders/findFolders";

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

export function onDeleteFolder(TYPE, folderName){
    switch (TYPE) {
        case "FOLDER":
            break;
        
        case "FOLDER_AND_CONTENTS":
            break;

        case "CONTENTS":
            let folders = Array.from(this.state.folders)
            let folderToDelete = findFolder(folderName, folders[0])
            let noFolder = folders[0];
            // Push contents to "noFolder".
            noFolder.contents.push(...folderToDelete.contents);
            
            // Delete folder.
                //  find index.
            let index = folders.findIndex(folder => folder.name===folderName);
                // Remove the item.
            folders.splice(index,1);

            // update the state.
            this.props.onFoldersUpdate(folders);

            break;
    }
}