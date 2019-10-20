export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function previewElement(e) {
    this.props.onPreview(e);
}

export function deleteElement(e) {
    this.props.onDelete(e);
}

export function handleDrag(e){
    e.dataTransfer.setData("component-name", event.target.getAttribute("id"));
}