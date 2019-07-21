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

export function getPropertyContainingProps(obj){
    // Fetch list of props from child.
    let props = [];
    let state;
    try{
        state = JSON.parse(obj.state);
    }
    catch(e){
        console.error("Error: Child state is an invalid json, try an online validator on below string")
        console.log(child.state);
    }
    for(let property in state){
        if(state[property].includes("prop")){
            props.push(property);
        }
    }
    return props;
}

export function getChildConfig(child) {
    return {   
            name: child.name,
            subscribableEvents: child.events.map((event=>{
                return {
                    publishName: event.publishName,
                    reducer: "",
                    previousReducer: event.reducer
                }
            })),
            properties: getPropertyContainingProps(child).map(prop=>{
                return {
                    property:prop,
                    value:""
                }
            })
        }
}

export function writeConfigTolocal(configuration, state) {
    let config = state.parent.children.find(child=>child.name.includes(state.child.name));

    config.subscribableEvents = configuration.subscribableEvents;
    config.properties = configuration.properties;

    // TODO write to localstorage.
    let components = JSON.parse(localStorage.getItem("ui-editor"));

    let index = components.findIndex(component=>component.name===state.parent.name);

    components[index] = state.parent;

    localStorage.setItem("ui-editor", JSON.stringify(components));
}
