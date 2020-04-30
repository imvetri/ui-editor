
// Public functions

export function selectionChanged(e) {

    /** Pass message to Components about selection change  */

    this.props.onSelectionChange(e);
}

export function addComponentDetails(e){

    /** Pass details about component or folder in the drag event */
    let name = event.target.getAttribute("data-name")
    e.dataTransfer.setData("component-name", name);
    e.dataTransfer.setData("parent-folder-name", e.currentTarget.parentElement.getAttribute("data-folder-name"))
    e.stopPropagation();
}

window.eventCallbacks = {
    addComponentDetails: addComponentDetails
};