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
