
    export function updateEvent(event) {
        let element = JSON.parse(JSON.stringify(this.state.component))

        // Keep the child component name as the ID. Will cause problem in future for list rendering boy.
        if(this.state.selectedTag.includes("child-component-")){
            event.id = this.state.selectedTag.split("child-component-")[1]
        }
        else{
            event.id = this.state.selectedTag.split("-")[1];
        }
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
        let component = JSON.parse(JSON.stringify(this.state.component));

        // Remove the event to be deleted.
        component.events = component.events.splice(index, 1);

        // Update elements with new events.
        this.props.onEventsUpdate(component.events);
    }

    export function updateConfiguration(config){
        this.props.onConfigUpdate(config);
    }