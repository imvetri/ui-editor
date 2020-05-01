
// Public functions

export function selectionChanged(componentName, e) {

    /** Pass message to Components about selection change  */

    this.props.onSelectionChange(componentName, e);
}