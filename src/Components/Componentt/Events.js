
// Public functions

export function selectionChanged(e) {

    /** Pass message to Components about selection change  */

    this.props.onSelectionChange(e);
}

export function addComponentDetails(e){

    /** Pass details about component or folder in the drag event */

    if(this.props.viewType === "THUMBNAIL_VIEW"){
        e.dataTransfer.setData("text/html", e.target.querySelector(".background > .component > *").outerHTML)
    }

    let name = event.target.getAttribute("data-name")
    e.dataTransfer.setData("component-name", name);
    e.dataTransfer.setData("parent-folder-name", e.currentTarget.parentElement.getAttribute("data-folder-name"))
    e.stopPropagation();
}

window.eventCallbacks = {
    addComponentDetails: addComponentDetails
};