
export function updateEvent (events) {
    // Create new state.
    let newElements = Object.assign({}, this.state).components;
    let selectedComponent = newElements.find(element=>element.name===this.state.selectedComponent.name)

    selectedComponent.events = events;

    // Set state to the new state.
    this.setState({
        elements: newElements
    });

}


export function updateConfig(config){
    
    let newElements = Object.assign({}, this.state).components;
    
    let parent = newElements.find(element=>element.name===config.parentName);
    let child = newElements.find(element=>element.name===config.childName);

    parent.state = JSON.parse(parent.state);

    if(parent.config === undefined){
        parent.config = {};
    }
    else {
        parent.config = JSON.parse(parent.config);
    }
    parent.config[child.name] = config.config;
    if(parent.config[child.name].override) {    
        parent.state[child.name] = [JSON.parse(child.state)];
    } 
    else {
        delete parent.state[child.name];
    }


    parent.state = JSON.stringify(parent.state)
    parent.config= JSON.stringify(parent.config)

    this.setState({
        elements: newElements
    })
}


export function saveElement (element) {
    let components = Array.from(this.state.components);
    let newElement;
    
    // Check if element exist.
    let elementExist = components.find(component=>component.name===element.name) || components.find(component=>component.name===element.trueName);
    let selectedComponent = components.find(component=>component.name===this.state.selectedComponent.name);
    let selectedIndex = components.findIndex(component=>component.name===this.state.selectedComponent.name);
    if(elementExist){


        // Find the element.
        let elementUnderEdit = selectedComponent;

        // Merge.
        elementUnderEdit = Object.assign(elementUnderEdit, element)

        // Push it to original list.
        components[selectedIndex] = elementUnderEdit;
    }

    else {
        newElement = {
            name: element.name,
            markup: element.markup,
            events: [],
            state: element.state || "{}",
            style: element.style,
            children: [],
            id: Math.ceil(Math.random()*1000),
            config:"{}"
        };

        delete newElement.trueName;
        components.push(newElement);
        selectedIndex = components.length-1;

        // Find noFolder
        this.state.folders[0].contents.push(element.name)
        // Push new component into contents.
    }
    


    this.setState({
        elements: components,
        element: {
            name: element.name,
            markup: element.markup,
            style: element.style,
            state: element.state,
            events: element.events || []
        },
        showEditor: false,
        folders: this.state.folders
    });
}

