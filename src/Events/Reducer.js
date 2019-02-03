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
    this.props.addEvent({
        name: this.state.event.name,
        reducer: this.state.event.reducer
    })
    this.setState({
        event: {
            name: "",
            reducer: ""
        }
    })
}