import {writeData} from "../utilities/Storage";
import {findFolder} from "../utilities/Components/Folders/findFolders";

export function onDeleteComponent(event) {

    /** Delete the component from the folder, update the state */
        
    event.stopPropagation();
    let componentName = event.target.closest("div[draggable='true']").innerText.split("\n")[0];
    let folderName = event.target.closest("div.newFolder").getAttribute("data-folder-name");
    let folder = findFolder(folderName, this.state.folders[0])

    let contentIndex = folder.contents.findIndex(content=>content===componentName);
    folder.contents.splice(contentIndex, 1);
    let components = Array.from(this.state.components);
    
    let index = components.findIndex(component=>component.name===componentName)

    components.splice(index,1);

    this.setState({
        components: components,
        folders: this.state.folders
    })

    writeData("ui-editor", components)

}

export function onDeleteFolder(TYPE, folderName, parentName){

    /** Delete the folder. While deleting only the folder, move its contents to parent folder */

    switch (TYPE) {
        case "FOLDER":
            break;
        
        case "FOLDER_AND_CONTENTS":
            break;

        case "CONTENTS":
            let folders = Array.from(this.state.folders)
            let folderToDelete = findFolder(folderName, folders[0])
            let noFolder = folders[0];

            noFolder.contents.push(...folderToDelete.contents);
            
            let parentFolder = findFolder(parentName, folders[0])
            let deleteIndex = parentFolder.contents.findIndex(content=>typeof content === "object" && content.name === folderName)
            parentFolder.contents.splice(deleteIndex, 1);

            this.props.onFoldersUpdate(folders);

            break;
    }
}