
    export function updateEvent(event) {
        let element = JSON.parse(JSON.stringify(this.state.element))
        event.id = this.state.selectedTag.split("-")[1];
        // Add 
        if (event.index === undefined) {
            element.events.push(event);
        } else {
            // Edit
            element.events[event.index] = event;
        }

        this.props.onEventsUpdate(element.events);
    }

    export function selectedTagChanged(e) {
        this.setState({
            selectedTag: e.currentTarget.value
        })
    }

    export function deleteEvent(index) {

        // Get current component.
        let element = JSON.parse(JSON.stringify(this.state.element));

        // Remove the event to be deleted.
        element.events.splice(index, 1);

        // Update elements with new events.
        this.props.onEventsUpdate(element.events);
    }

    export function updateConfiguration(config){
        if(config.override){
            this.props.onConfigUpdate(config);
        }
    }