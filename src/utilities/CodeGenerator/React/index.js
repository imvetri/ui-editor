// Elements to  react component.
export function convertToReact (component){

    let markup = "markup";

    component.events.forEach(event=>{
        event.id = event.id.replace("-","");
    })

    let addProps= (component)=>{
        return component[markup].replace(">",` {...this.props}>{this.props.children}`)
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
    
        return markup.split("state.").join("this.state.")
    }

    // checks if state override is on. then adds state prop to child 
    let getStatedMarkup = (markup)=>{
        // for all the config.
        // filter child with overide state is true
        let config = JSON.parse(component.config);
        let childrenConfig = Object.keys(config);
        childrenConfig.forEach(childName=>{

            // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this. // Problem - subscibing to child list component does not work Solution - add publishable enevts here
            if(config[childName].override ){
                let childMarkup = `<${childName}></${childName}>`;

                let childMarkupWithProps = `<${childName} state={item} key={~~(Math.random()*10000)} index={i}></${childName}>`;
                let renderListMarkup = `{state.${childName}.map((item,i)=>${childMarkupWithProps})}`;
                markup =  markup.replace(childMarkup, renderListMarkup);   
            }
        })
        return markup;
    }

    function getPublishes(publishes){
        return publishes.map(publish=>{
            if(publish.publishable){
                return `
                if(${publish.publishCondition}){
                    this.props.${publish.publishName}? this.props.${publish.publishName}(e):null;
                }`
           }
        }).join("\n")
    }

    function getReducer(reducers){
        return reducers.map(reducer=>`
            ${reducer.reducer}
            this.setState(state);
            e.state = state;
            e.index = this.props.index;
            ${getPublishes(reducer.publishes)}`
        ).join("\n");
    }
    
    let propsInMarkup = addProps(component);
    let stateOverideMarkup = getStatedMarkup(propsInMarkup);
    let componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events);
    
    let ReactComponent = 
`(
class ${component.name} extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.state || ${component.state};

        // Generate css as a separate file on download
    }

    ${component.events.map(event=>{
    return `
    ${event.id+event.name} (e) {
        var state = JSON.parse(JSON.stringify(this.state))
        ${getReducer(event.reducers)}
    }`

    }).join("\n")}

    render() {
        return (${componentEventedMarkup})
    }
})
`
    return ReactComponent;
}
