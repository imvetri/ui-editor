export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function handleDrag(e){

    let name = event.target.getAttribute("data-name")
    event.target.classList.add("hideAdditionals");
    e.dataTransfer.setData("component-name", name);
}

window.eventCallbacks = {
    handleDrag: handleDrag
};