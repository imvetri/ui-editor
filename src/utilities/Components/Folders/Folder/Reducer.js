export function deleteFolder(e){
    let parent = e.currentTarget.closest(".newFolder").parentElement.closest(".newFolder").getAttribute("data-folder-name")
    this.props.onDeleteFolder("CONTENTS", this.state.name, parent);
}

function openFolder(){
    this.setState({
        status: "open"
    });
}

function closeFolder(){
    this.setState({
        status: "closed"
    });
}

export function toggleFolder(){
    if(this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}
