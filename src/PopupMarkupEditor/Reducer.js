
    export function save () {
        if(validation(this.state)){
            this.saveElement();
        }
    }

    export function validation (state) {
        return state.markup && state.name;
    }

    export function close () {
        this.setState({
            show:false
        })
    }

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

    export function updateStyle (event) {
        this.setState({
            style: event.currentTarget.value
        })
    }

    export function updateStyleClass (event) {
        this.setState({
            styleClass: event.currentTarget.value
        })
    }

    export function updateState (event) {
        this.setState({
            state: event.currentTarget.value
        })
    }