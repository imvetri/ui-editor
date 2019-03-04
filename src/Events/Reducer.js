export function updateReducer (event) {
    this.setState({
        event : {
            name: this.state.event.name,
            reducer: event.currentTarget.value
        }
    })
}

export function updateEventName (e) {
    this.setState({
        event : {
            name: e.target.value,
            reducer: this.state.event.reducer
        }
    })
}

export function addEvent() {
    let events = Array.from(this.props.events)
    
    events.push({
        name: this.state.event.name,
        reducer: this.state.event.reducer
    });

    this.props.addEvent(events)
    
    this.setState({
        event: {
            name: "",
            reducer: ""
        }
    })

    // Fix
    console.info("If you find the new event is not working in preview, select element -> click edit and save. There is a bug which requires a fix");
}

export function editEventName(e) {
    let index = Number(e.target.getAttribute("index"));
    console.log(index);
    let newEvents = this.state.events;
    
    newEvents[index].name = e.target.value;

    this.setState({
        events: newEvents
    })
}

export function editReducer(e) {
    let index = Number(e.target.getAttribute("index"));
    let newEvents = this.state.events;

    newEvents[index].reducer = e.target.value;

    console.log(e.target.value);

    this.setState({
        events: newEvents
    })
}
