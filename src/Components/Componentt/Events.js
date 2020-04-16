export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function addComponentDetails(e){
    console.log("Component dragged")
    let name = event.target.getAttribute("data-name")
    event.target.classList.add("hideAdditionals");
    e.dataTransfer.setData("component-name", name);
    e.stopPropagation();
}

window.eventCallbacks = {
    addComponentDetails: addComponentDetails
};