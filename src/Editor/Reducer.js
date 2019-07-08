// Private.
function getChildComponents(markup) {
    let components = JSON.parse(localStorage.getItem("ui-editor"));
    let nestedComponents = components.filter(component=> markup.includes(component.name)).map(component=>component.name);
    // for each of component name, check if it exists in the markup.
    // return true if it 
    return nestedComponents;
}

// Public.

export function updateName (event) {
    this.setState({
        name: event.currentTarget.value
    })
}

export function updateMarkup (event) {
    this.setState({
        markup: event.currentTarget.value
    })

    let childComponents = getChildComponents(this.state.markup);
    if(childComponents.length>0){
        this.props.onChildComponentDetected(childComponents)
    }
}

export function  updateStyle (event) {
    this.setState({
        style: event.currentTarget.value
    })
}

export function updateState (event) {
    this.setState({
        state: event.currentTarget.value
    })
}
