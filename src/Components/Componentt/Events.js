export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function addComponentDetails(e){
    console.log("Component dragged")
    let name = event.target.getAttribute("data-name")
    event.target.classList.add("hideAdditionals");
    e.dataTransfer.setData("component-name", name);
    e.dataTransfer.setData("parent-folder-name", e.currentTarget.parentElement.getAttribute("data-folder-name"))
    e.stopPropagation();
}

window.eventCallbacks = {
    addComponentDetails: addComponentDetails
};