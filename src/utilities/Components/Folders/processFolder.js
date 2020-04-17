import Folder from "./Folder";
import Componentt from "../../../Components/Componentt";

let selectedComponent, onSelection, onFolderUpdate, onDeleteComponent, components, onDeleteFolder, folders;

function initialiseProps(props, checkFolder){
    folders = props.folders;
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;
    components = props.components;
    onFolderUpdate = checkFolder;
    onDeleteComponent = props.onDeleteComponent;
    onDeleteFolder = props.onDeleteFolder;
}

function processFolder (folder, i){
    let contents = folder.contents;

    return <Folder
                key={i}
                folder={folder}
                folders={folders}
                contents={contents.map( processContent )}
                onFolderUpdate={onFolderUpdate}
                onDeleteFolder={onDeleteFolder}/>
}

function processContent (content, i){

    // Check if content is a component name.
    if(typeof content === "string" ){

        return <Componentt 
                    key={i}
                    component={components.find(component=>component.name===content)}
                    selectedComponent={selectedComponent}
                    onSelectionChange={onSelection}
                    onDeleteComponent = {onDeleteComponent}
                    />
    }
    // else its a folder type.
    else {
        let folder = content;
        return <Folder
                    key={i}
                    folder={folder}
                    folders={folders}
                    contents={folder.contents.map( processContent )}
                    onFolderUpdate={onFolderUpdate}
                    onDeleteFolder={onDeleteFolder}/>
    }
}


export function folderStructure(props, onFolderUpdate){
    let folders = props.folders;

    initialiseProps(props, onFolderUpdate);

    return(folders.map(processFolder))
}