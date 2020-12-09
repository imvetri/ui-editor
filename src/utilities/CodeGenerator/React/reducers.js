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

function getReducer(reducer){
    return `
        ${reducer.reducer}
        this.setState(state);
        e.state = state;
        e.index = this.props.index;
        ${getPublishes(reducer.publishes)}`
}

function getReducers(component){
    return component.events.map(event=>{
        return `
        ${event.id+event.name} (e) {
            var state = JSON.parse(JSON.stringify(this.state))
            ${getReducer(event.reducer)}
        }`
    
        }).join("\n")
}

module.exports = {
    getReducers
}