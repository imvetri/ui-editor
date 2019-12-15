export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function handleDrag(e){
    e.dataTransfer.setData("component-name", event.target.getAttribute("id"));
}