import { codeModifier } from "./codeModifier";
import { getChildComponents } from "../utilities/nestedComponentSetup";

function getComponentString(component){

    if(!component.markup[3]){
        return;
    }
    return convertToReactcomponent(component);
}

function createComponent(component){
    let componentString = getComponentString(component);
    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"]  }).code)
}


// Elements to  react component.
function convertToReactcomponent (component){

    component.events.forEach(event=>{
        event.id = event.id.replace("-","");
    })

    let getComponentEventedMarkup = (markup, events)=>{
        events.forEach(event=>{
            let id = `id="${event.id}"`;
            markup = markup.replace(id, `${id} ${event.name}={this.${event.id+event.name}.bind(this)}`);
        });

        // This was a easy to think but hard to write a readable code. I know comments wont help.
        let childComponents = getChildComponents(markup);
        if(childComponents.length>0){
            let markup = "";
            // For each of child components
            childComponents.forEach(child=>{
                // From each of child events filter the publishable events.
                let publishableEvents = child.events.filter(event=>event.publishable===true);
                // Filter publishable child events that are in parent.
                // For each of publishable events
                // Find which is present in this component.events.name
                let eventUsedInParent;
                publishableEvents.forEach(publishableEvent=>{
                    eventUsedInParent = component.events.find(event=>event.name===publishableEvent.publishName)
                })
                let functionDef = codeModifier(eventUsedInParent.reducer);

                let props = eventUsedInParent.name+'='+`{function(){${functionDef}}.bind(this)}`
                // then do markup.replace
                markup = component.markup.replace(child.name, child.name+" "+props);
            })
            return markup.split("{state.").join("{this.state.");
        }
    
        return markup.split("{state.").join("{this.state.")
    }
    
    let getComponentReducers = (events) => {
        return events.map(event=>{
            let functionName = event.id+event.name;
            let functionDef = codeModifier(event.reducer);

            if(event.publishable===true){
                return `
                    ${functionName} (e) {
                        ${functionDef}
                        e.state = state;
                        this.props.${event.publishName}? this.props.${event.publishName}(e):null;
                    }
                    `
            }
            return `
                    ${functionName} (e) {
                        ${functionDef}
                    }`
        }).join("\n")
    }
    

    let componentEventedMarkup = getComponentEventedMarkup(component.markup, component.events)
    let componentReducers = getComponentReducers(component.events)
    let componentName = component.name.split(" ").join("")
    let componentState = component.state
    let ReactComponent = 
    `(
    class ${componentName} extends Component {
    
        constructor(props) {
            super(props);
            this.state = ${componentState};
        }
    
        ${componentReducers}
    
        render() {
    
            return (${componentEventedMarkup})
        }
    })
    `
    return ReactComponent;
}

module.exports = {
    createComponent,
    getComponentString
}