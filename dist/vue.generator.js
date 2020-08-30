function replaceAll(str, replace, it){
    return str.replace(new RegExp(replace,"g"), it)
}

function JsxToVueMarkup(component) {

    let markup = component.markup;
    
    // 1. replace all { and } with {{ and }}
    markup = replaceAll(markup, "{", "{{")
    markup = replaceAll(markup, "}", "}}")

    // 2. remove all state references
    markup = replaceAll(markup, "state.", "")
    return markup;
}

function reactToVueEventName(name){
    // Remove 'on'
    return name.replace("on", "").toLowerCase()
}

function getComponentEventedMarkup(markup, events) {
    events.forEach(event=>{
        let id = `id="${event.id}"`;
        
        // 1. Convert the name to vue equivalent name
        event.name= reactToVueEventName(event.name);
        // check if markup contains the id.
        if(markup.includes(id)){
            markup = markup.replace(id, `${id} v-on:${event.name}="${event.id+event.name}"`);
        }
        // its a child component.
        else{
            markup = markup.replace(`<${event.id}`,`<${event.id} v-on:${event.name}="${event.id+event.name}"`)
        }
            
    });

    return markup.split("state.").join("this.state.")
}

function generate(component) {
    
    component.markup = JsxToVueMarkup(component)
    component.markup = getComponentEventedMarkup(component.markup, component.events)
    return `
Vue.component(${component.name}, {
    data: function(){
        return ${component.state}
    },
    template: '${component.markup}'
})
`
}