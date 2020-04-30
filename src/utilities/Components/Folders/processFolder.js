import Folder from "./Folder";
import Componentt from "../../../Components/Componentt";

let selectedComponent, onSelection, onFolderUpdate, components, folders, onFolderStatusChanged, viewType;

function initialiseProps(props, checkFolder, x){
    folders = props.folders;
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;
    components = props.components;
    onFolderUpdate = checkFolder;
    onFolderStatusChanged=x;
    viewType = props.viewType;
}

function processFolder (folder, i){
    let contents = folder.contents;

    return <Folder
                key={i}
                folder={folder}
                folders={folders}
                contents={contents.map( processContent )}
                onFolderStatusChanged={onFolderStatusChanged}
                onFolderUpdate={onFolderUpdate}/>
}

function processContent (content, i){

    // Check if content is a component name.
    if(typeof content === "string" ){

        return <Componentt 
                    key={i}
                    component={components.find(component=>component.name===content)}
                    selectedComponent={selectedComponent}
                    onSelectionChange={onSelection}
                    viewType={viewType}
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
                    onFolderStatusChanged={onFolderStatusChanged}
                    onFolderUpdate={onFolderUpdate}/>
    }
}


export function folderStructure(props, onFolderUpdate, onFolderStatusChanged){
    let folders = props.folders;

    initialiseProps(props, onFolderUpdate, onFolderStatusChanged);

    return(folders.map(processFolder))
}