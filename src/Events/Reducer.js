
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
            // 1. Find the event
            let changedEventIndex = element.events.findIndex(e=>e.id===event.id && e.name ===event.name);
            if(changedEventIndex==-1){
                console.error("Changing event name will not help. Create a new event"); // Feature 
            }
            element.events[changedEventIndex] = event;
        }

        this.props.onEventsUpdate(element.events);
    }

    export function selectedTagChanged(e) {
        this.setState({
            selectedTag: e.currentTarget.value,
            selectedEventName: ""
        })
    }

    export function deleteEvent(index) {

        // Get current component.
        let component = JSON.parse(JSON.stringify(this.state.component));

        // Remove the event to be deleted.
        component.events.splice(index, 1);

        // Update elements with new events.
        this.props.onEventsUpdate(component.events);
    }

    export function updateConfiguration(config){
        this.props.onConfigUpdate(config);
    }

    export function updateSelectedEvent(e){
        let selectedEvent = this.props.component.events.find(event => event.name === e.currentTarget.value);

        if(selectedEvent){
            this.setState({
                selectedEventName: e.currentTarget.value,
                selectedEvent : selectedEvent
            })
        }

        else if(this.state.selectedEvent.reducers[0].reducer===""){
            this.setState({
                selectedEventName: e.currentTarget.value,
                selectedEvent : {
                    name: e.currentTarget.value,
                    reducers: [{
                        reducer: "",
                        publishes: [],
                        index: this.props.component.events.length
                    }]
                }
            })
        }

    }