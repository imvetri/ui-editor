// Public.

export function updateName (event) {
    this.setState({
        name: event.currentTarget.value
    })
}

export function updateMarkup (event) {
    this.setState({
        markup: event.currentTarget.value
    })
}

export function  updateStyle (event) {
    this.setState({
        style: event.currentTarget.value
    })
}

export function updateState (event) {
    this.setState({
        state: event.currentTarget.value
    })
}
