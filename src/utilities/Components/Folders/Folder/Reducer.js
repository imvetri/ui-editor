export function deleteFolder(e){
    if(e.key==="Backspace" && e.ctrlKey && this.state.status.includes("fa fa-folder-open")){
        // Delete the folder
        this.props.onDeleteFolder("FOLDER");
    }
    if(e.key==="Backspace" && e.shiftKey && this.state.status.includes("fa fa-folder-open")){
        // Delete the folder and the contents.
        this.props.onDeleteFolder("FOLDER_AND_CONTENTS");
    }
    if(e.key==="Backspace" && e.altKey && this.state.status.includes("fa fa-folder-open")){
        // Delete the folder and the contents.
        this.props.onDeleteFolder("CONTENTS");
    }
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
    debugger;
    if(this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}
