import Folder from "./Folder";
import Componentt from "../../../Components/Componentt";

let selectedComponent, onSelection, onFolderUpdate, onDelete;

function initialiseProps(props, checkFolder){
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;

    onFolderUpdate = checkFolder;
    onDelete = props.onDelete;
}

function processFolder (folder, i){
    let contents = folder.contents;

    return <Folder
                key={i}
                folder={folder}
                contents={contents.map( processContent )}
                selectedComponent={selectedComponent}
                onSelection={onSelection}
                onFolderUpdate={onFolderUpdate}
                onDelete={onDelete}/>
}

function processContent (content, i){

    // Check if content is a component name.
    if(typeof content === "string" ){

        if(components.find(component=>component.name===content)===undefined){
            debugger;
        }
        return <Componentt 
                    component={components.find(component=>component.name===content)}
                    selectedComponent={selectedComponent}
                    onSelectionChange={onSelection}
                    onDelete = {onDelete}
                    />
    }
    // else its a folder type.
    else {
        let folder = content;
        return <Folder
                    folder={folder}
                    contents={folder.contents.map( processContent )}
                    selectedComponent={selectedComponent}
                    onSelection={onSelection}
                    onFolderUpdate={onFolderUpdate}
                    onDelete={onDelete}/>
    }
}


export function folderStructure(props, checkFolder){
    let folders = props.folders;

    initialiseProps(props, checkFolder);

    return(folders.map(processFolder))
}