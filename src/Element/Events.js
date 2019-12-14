export function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

export function deleteElement(e) {
    let componentName = e.currentTarget.parentElement.parentElement.innerText.split("\n")[0];
    this.props.onDelete(componentName);
}

export function handleDrag(e){
    e.dataTransfer.setData("component-name", event.target.getAttribute("id"));
}