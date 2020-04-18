import { findFolder } from "../findFolders";

function handleComponentDrop(componentName, oldParent){
    let contents = Array.from(this.state.contents);
    
    contents.push(componentName)

    this.props.onFolderUpdate({
        name: this.state.name,
        contents: contents,
        type: "folder",
        status: "open"
    },
    "COMPONENT",
    oldParent,
    componentName)
}

function handleFolderDrop(folderName, oldParent){
    let contents = Array.from(this.state.contents);

    // 1. Find folder object.
    let droppedFolder = findFolder(folderName, this.props.folders[0])

    contents.push(droppedFolder)

    // 2. Remove it from its parent (parentFolderName)
    // do somewhere else. head hurts

    // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
    if (folderName && folderName !== this.state.name) {
        this.props.onFolderUpdate({
            name: this.state.name,
            contents: contents,
            type: "folder",
            status: "open"
        },
        "FOLDER",
        oldParent,
        folderName)
    }
}

export function dropHandler(ev) {
    ev.preventDefault();
    let componentName = ev.dataTransfer.getData("component-name");
    let folderName = ev.dataTransfer.getData("folder-name");
    let oldParent = ev.dataTransfer.getData("parent-folder-name")
    let newParent = this.state.name;

    if(oldParent === newParent ){
        this.setState({
            folderClass: "newFolder",
            status: "closed"
        })
        return;
    }

    // If component name is null, then it is a folder dropped on folder
    if (componentName === "") {
        // This should happen.
        if (folderName == "null" || folderName == "") {
            console.error("Folder cannot be empty");
            return;
        }

        handleFolderDrop.call(this, folderName, oldParent);
    }
    else {
        handleComponentDrop.call(this, componentName, oldParent);
    }

    console.log("Drop from folder");
    ev.stopPropagation()
}

export function dragOverHandler(ev) {
    ev.preventDefault();
    this.setState({
        folderClass: "newFolder dragOver",
        status: "open"
    })
}

export function dragLeaveHandler(e) {
    this.setState({
        folderClass: "newFolder",
        status: "closed"
    })
}


export function folderStartDrag(e) {
    let name = event.target.getAttribute("data-folder-name")
    let parent = event.target.parentElement.getAttribute("data-folder-name")
    e.dataTransfer.setData("folder-name", name);
    e.dataTransfer.setData("parent-folder-name", parent);
    console.log(`Folder ${name} draged with parent ${parent}`)
}
