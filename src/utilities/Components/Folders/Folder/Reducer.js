export function deleteFolder(e){
    if(e.key==="Backspace" && e.ctrlKey && this.state.folderClass.includes("folderSelected")){
        this.props.onFolderDelete(this.state.folder);
    }
}

function openFolder(){
    this.setState({
        status: "fa fa-folder-open"
    });
}

function closeFolder(){
    this.setState({
        status: "fa fa-folder"
    });
}

export function toggleFolder(){
    if(this.state.status === "fa fa-folder") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}
