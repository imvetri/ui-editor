
// Public functions.


export function updateSelectedComponent (e) {


    /** Update state about currently selected component */

    let componentName = e.currentTarget.innerText.split("\n")[0];
    let selectedComponent = this.state.elements.find(component=>component.name===componentName);


    this.setState({
        selectedComponent: selectedComponent
    })

}