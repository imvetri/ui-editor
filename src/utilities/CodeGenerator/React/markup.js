let addEvents = (markup, events, component) => {
    events.forEach(event => {
        let id = `id="${event.id}"`;
        // check if markup contains the id.
        if (markup.includes(id)) {
            markup = markup.replace(id, `${id} ${event.name}={this.${event.id + event.name}.bind(this)}`);
        }
        // its a child component.
        else {
            markup = markup.replace(`<${event.id}`, `<${event.id} ${event.name}={this.${event.id + event.name}.bind(this)}`)
        }

    });

    /**
     * This piece of code is needed to try a feature.
     * Feature - Add events and reducers to Div
     * Expected - Events to work
     * Actual - Events don't work
     * 
     * Implement
     * 1. check if state.events object preset
     * 2. Then appened it to the markup
     */

    function stateToComponent(state){
        return ` ${Object.keys(state.events).map(key=>`${key}={()=>{${state.events[key]}}}`).join(" ")}>`
    }

     let state = JSON.parse(component.state);
     if(state.events){
         markup = markup.replace(">",stateToComponent(state))
     }

    /**
     * This piece of code is needed only for the exception case.
     * Exception case that I'm trying to build is draw divs on screen
     * And add events using eventsBuilder component.
     * 
     * All these markup.replace is needed so that THE JSX MARKUP LOOKS CLEAN. it is fine if this file is this bad.
     */
    if (markup.includes("...state")) {
        markup = markup.split("state.").join("this.state.").replace("...state", "...this.state")
        return markup;
    }
    return markup.split("state.").join("this.state.")
}

// checks if state override is on. then adds state prop to child 
let addChildrenConfig = (markup, component) => {
    // for all the config.
    // filter child with overide state is true
    let config = JSON.parse(component.config);
    let childrenConfig = Object.keys(config);
    childrenConfig.forEach(childName => {

        // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this. // Problem - subscibing to child list component does not work Solution - add publishable enevts here
        if (config[childName].override) {
            let childMarkup = `<${childName}></${childName}>`;

            let childMarkupWithProps = `<${childName} state={item} key={~~(Math.random()*10000)} index={i}></${childName}>`;
            let renderListMarkup = `{state.${childName}.map((item,i)=>${childMarkupWithProps})}`;
            markup = markup.replace(childMarkup, renderListMarkup);
        }
    })
    return markup;
}

let addChildren= (component)=>{
    return component.markup.replace(">",` id="${component.name}" >{this.props.children}`)
}



module.exports = {
    addEvents: addEvents,
    addChildrenConfig:addChildrenConfig,
    addChildren: addChildren
}