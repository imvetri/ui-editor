import {writeData} from "../utilities/Storage";
import {findFolder, findParent, findParentFolder} from "../utilities/Components/Folders/findFolders";

export function onDeleteComponent(event) {

    let componentName = this.state.selectedComponent.name;
    let folder = findParent(componentName, this.state.folders[0])

    let contentIndex = folder.contents.findIndex(content=>content===componentName);
    folder.contents.splice(contentIndex, 1);
    let components = Array.from(this.state.components);
    
    let index = components.findIndex(component=>component.name===componentName)

    components.splice(index,1);

    this.setState({
        components: components,
        folders: this.state.folders
    })

    writeData("ui-editor", components);
    writeData("folders", this.state.folders);

}

export function onDeleteFolder(TYPE, folderName){


    let folders = Array.from(this.state.folders)
    let noFolder = folders[0];

    /** Delete the folder. While deleting only the folder, move its contents to parent folder */

    let parentFolder = findParentFolder(folderName, folders[0])

    let folderToDelete = findFolder(folderName, folders[0])

    switch (TYPE) {
        case "FOLDER_RETAIN_CONTENTS":
            noFolder.contents.push(...folderToDelete.contents);
            let deleteIndex = parentFolder.contents.findIndex(content=>typeof content === "object" && content.name === folderName)
            parentFolder.contents.splice(deleteIndex, 1);
            this.updateFolders(folders);
            break;
        
        case "FOLDER_AND_CONTENTS":
            break;

        case "ENTIRE_FOLDER":

            break;
    }
}