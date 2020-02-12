export function deleteFolder(e){
    if(e.key==="Backspace" && e.ctrlKey && this.state.folderClass.includes("folderSelected")){
        this.props.onFolderDelete(this.state.folder);
    }
}

function openFolder(){
    this.setState({
        status: "fa fa-folder-open"
    })
}

function closeFolder(){
    this.setState({
        status: "fa fa-folder"
    })
}

export function toggleFolder(){
    this.state.status === "fa fa-folder"?  openFolder.call(this) : closeFolder.call(this);
}

export function selectFolder(){
    this.setState({
        folderClass:"newFolder folderSelected"
    })
}

export function deselectFolder(){
    this.setState({
        folderClass:"newFolder"
    })
}
