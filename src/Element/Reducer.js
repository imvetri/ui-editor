// Dependencies.

export function updateselectedIndex (e) {
    // Find the element from state that matches the currently selected element.
    let selectedIndex = Number(e.target.getAttribute("index"));

    // Update the state with selectedElement.
    this.setState({
        selectedIndex,
        name: this.state.elements[selectedIndex].name,
        markup: this.state.elements[selectedIndex].markup
    })

}