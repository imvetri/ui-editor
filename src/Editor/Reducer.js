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

/**
 * Merges parentConfig and child config for fresh values.
 * @param {*} parentConfig  - Parent configuration containing how the child should work. Contains details to pass child configuration.
 * @param {*} child  - Child element from which the events and props are fetched.
 */
function getSubscribableEvents(parentConfig, child) {
    return child.events.map((event=>{
        let subscribableEvent = parentConfig.subscribableEvents.find(subscribableEvent=>subscribableEvent.publishName.includes(event.publishName));
        if(subscribableEvent === undefined){
            return {
                publishName: event.publishName,
                reducer: "",
                previousReducer: event.reducer
            }
        }
        return {
            publishName: event.publishName,
            reducer: subscribableEvent.reducer? subscribableEvent.reducer: "" ,
            previousReducer: event.reducer
        }
    }))
}

/**
 * Merges parentproperty configuration using child inout.
 * @param {*} parent 
 * @param {*} child 
 */
function mergeParentWithChildProps(parent, child){
    let parentConfig = parent.children.find(kid=>kid.name.includes(child.name))
    return getPropertyContainingProps(child).map(prop=>{
        let parentConfigProp = parentConfig.properties.find(property=>property.property.includes(prop))
        return {
            property:prop,
            value:parentConfigProp.value? parentConfigProp.value: ""
        }
    })
}

export function getChildConfig(child, parent) {
    let parentConfig = parent.children.find(kid=>kid.name.includes(child.name))
    return {   
            name: child.name,
            subscribableEvents: getSubscribableEvents(parentConfig, child),
            properties: mergeParentWithChildProps(parent,child)
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


export function openConfigurator () {
    // onMouseOut from markup.
    // Take the selected text.
    let selectedText = window.getSelection().toString();

    if(selectedText === "" ){
        return;
    }
    // Read components details
    let components = JSON.parse(localStorage.getItem("ui-editor"));

    // Find the component that matches selectedText
    let child = components.find(component=>component.name.includes(selectedText));

    // Find the parent from the local storage. Because that has  the updated details with child component config.
    let parent = components.find(component=>component.name.includes(this.state.name));

    // Initialise parent data with child details.
    this.initChildDetails(parent, child);

    // Check if selected text exist in any of component's name
    if(child){
        // this.openConfigurator
        this.setState({
            child: child,
            parent: parent
        })
    }
    // Open configurator if a valid nested component is selected.
}

export function hideConfigurator(){
    this.setState({
        child: false
    })
}

export function saveDetails(configuration){
    this.setState({
        parent: this.state.parent
    })

    writeConfigTolocal(configuration, this.state)
}