export function publishEvent() {
        this.props.onSave({
            name: this.state.name,
            reducer: this.state.reducer,
            index: this.props.index,
            publishable: this.state.publishable,
            publishName: this.state.publishName
        })
    }

export function deleteEvent(){
        this.props.deleteEvent(this.props.index);
    }