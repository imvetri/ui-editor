// Elements to  react component.
const convertToReactcomponent = (element)=>{

    let getComponentEventedMarkup = (markup, events)=>{
        events.forEach(event=>{
            let id = `id="ID${event.id.split("ID")[1]}"`;
            markup = markup.replace(id, `${id} ${event.name}={this.${event.id+event.name}.bind(this)}`);
        });
    
        return markup.split("{state.").join("{this.state.")
    
        return markup;
    }
    
    let getComponentReducers = (events) => {
        return events.map(event=>{
            let functionName = event.id+event.name;
            let functionDef = event.reducer;
            return `
    ${functionName} () {
    ${functionDef}
    }`
        }).join("\n")
    }
    
    
    // element = {
    //   name: "Nested Component",
    //   markup: "<div id=\"ID1\">\n<span id=\"ID2\">{state.name}</span>\n<button id=\"ID3\">{state.text}</button>\n</div>",
    //   events: [
    //     {
    //       name: "onClick",
    //       reducer: "this.setState({\n\"name\":\"lala\"\n})",
    //       id: "spanID2"
    //     },
    //     {
    //       name: "onClick",
    //       reducer: "this.setState({\n\"text\":\"VEL\"\n})",
    //       id: "buttonID3"
    //     }
    //   ],
    //   state: "{\n\"name\":\"vetri\",\n\"text\":\"vel\"\n}"
    // }
    
    
    let componentEventedMarkup = getComponentEventedMarkup(element.markup, element.events)
    let componentReducers = getComponentReducers(element.events)
    let componentName = element.name.split(" ").join("")
    let componentState = element.state
    let ReactComponent = 
    `
    class ${componentName} extends Component {
    
        constructor(props) {
            super(props);
            this.state = ${componentState};
        }
    
        ${componentReducers}
    
        render() {
    
            return (${componentEventedMarkup})
        }
    }
    `
    return ReactComponent;
}

module.exports = {
    convertToReactcomponent
}