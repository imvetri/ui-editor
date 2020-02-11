// Dependencies.

export function updateSelectedComponent (e) {
    // Find the element from state that matches the currently selected element.
    let componentName = e.currentTarget.innerText.split("\n")[0];
    let selectedComponent = this.state.elements.find(component=>component.name===componentName);

    window.selectedcomponentname = selectedComponent.name;
    // Update the state with selectedElement.
    this.setState({
        selectedComponent: selectedComponent
    })

}