import { codeModifier } from "./codeModifier";

function getComponentString(component, options){

    if(!component.idMarkup[3]){
        return;
    }
    return convertToReactcomponent(component, options);
}

function createComponent(component, mode){

    let componentString;

    if(mode==="INTERACTIVE"){
        componentString = getComponentString(component);

    }
    else {
        componentString = getComponentString(component, {"drag-drop-feature":true});
    }
    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"]  }).code)
}


// Elements to  react component.
function convertToReactcomponent (component, options){

    /**
     * 1. if options.drag-drop-feature = true, use idMarkup as property
     */

    let markup = "markup";
    if(options && options["drag-drop-feature"]){
        markup = "idMarkup"
    }
    component.events.forEach(event=>{
        event.id = event.id.replace("-","");
    })

    let getComponentNameInMarkup= (component)=>{
        if(!options){
            return component[markup];
        }
        return component[markup].replace(">",` data-name='${component.name}' {...this.props} draggable="true" onDragStart={window.eventCallbacks.handleDrag}>{this.props.children}`)
    }

    let getComponentEventedMarkup = (markup, events)=>{
        events.forEach(event=>{
            let id = `id="${event.id}"`;
            // check if markup contains the id.
            if(markup.includes(id)){
                markup = markup.replace(id, `${id} ${event.name}={this.${event.id+event.name}.bind(this)}`);
            }
            // its a child component.
            else{
                markup = markup.replace(`<${event.id}`,`<${event.id} ${event.name}={this.${event.id+event.name}.bind(this)}`)
            }
                
        });
    
        return markup.split("{state.").join("{this.state.")
    }

    // checks if state override is on. then adds state prop to child 
    let getStatedMarkup = (markup)=>{
        // for all the config.
        // filter child with overide state is true
        let config = JSON.parse(component.config);
        let childrenConfig = Object.keys(config);
        childrenConfig.forEach(childName=>{

            // PRECAUTION : Edit markup only for showHideProp
            if(config[childName].showHideProp && !config[childName].override){
                let childMarkup = `<${childName}></${childName}>`;
                let showHideChild = `{this.state.${config[childName].showHideProp} ? ${childMarkup}: null}`
                if(markup.includes(childMarkup)){
                    markup = markup.replace(childMarkup, showHideChild)
                }
            }

            // PRECAUTION: Edit markup only for override
            if(config[childName].override && !config[childName].showHideProp){
                markup = markup.replace(childName, childName+` state={this.state.${childName}}`)
            }

            // PRECAUTION: Edit markup for both changes.
            if(config[childName].showHideProp && config[childName].override){

                //1. show or hide
                let childMarkup = `<${childName}></${childName}>`;
                let showHideChild = `this.state.${showHideChild} ? ${childMarkup}: null`
                if(markup.includes(childMarkup)){
                    markup = markup.replace(childMarkup, showHideChild)
                }

                //2. override state.
                markup = markup.replace(childName, childName+` state={this.state.${childName}}`)

            }

        })
        return markup;
    }

    let getComponentReducers = (events) => {
        return events.map(event=>{
            let functionName = event.id+event.name;
            let functionDef = codeModifier(event.reducer, component);

            if(event.publishable===true){
                return `
                    ${functionName} (e) {
                        ${functionDef}
                        e.state = state;
                        debugger;(1)
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
    
    let componentNamedMakrup = getComponentNameInMarkup(component);
    let stateOverideMarkup = getStatedMarkup(componentNamedMakrup)
    let componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events)
    let componentReducers = getComponentReducers(component.events)
    let componentName = component.name.split(" ").join("")
    let componentState = component.state
    let ReactComponent = 
    `(
    class ${componentName} extends Component {
    
        constructor(props) {
            super(props);
            this.state = this.props.state || ${componentState};
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