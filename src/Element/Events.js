export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function handleDrag(e){

    let name = event.target.getAttribute("data-name")
    e.dataTransfer.setData("component-name", name);
}

window.eventCallbacks = {
    handleDrag: handleDrag
};