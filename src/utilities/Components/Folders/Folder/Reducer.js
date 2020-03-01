export function deleteFolder(e){
    this.props.onDeleteFolder("CONTENTS", this.state.name);
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
    console.log("CLCIEKD");
    if(this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}
