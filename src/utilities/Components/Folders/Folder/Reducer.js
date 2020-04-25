export function deleteFolder(e){
    let parent = e.currentTarget.closest(".newFolder").parentElement.closest(".newFolder").getAttribute("data-folder-name")
    this.props.onDeleteFolder("CONTENTS", this.state.name, parent);
}

function openFolder(){
    let state = JSON.parse(JSON.stringify(this.state));
    state.status = "open";
    this.props.onFolderStatusChanged(state)
}

function closeFolder(){
    let state = JSON.parse(JSON.stringify(this.state));
    state.status = "closed";
    this.props.onFolderStatusChanged(state)
}

export function toggleFolder(){
    if(this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}
