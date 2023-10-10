

    function highlightItem(id){
        let style = document.querySelector("#dynamicHighlight");
        if(style){

            style.innerHTML = `#${id} { border: 1px solid #F00; }`;

        } else {
            style = document.createElement('style');
            style.id="dynamicHighlight"
            style.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }

    export function selectedTagChanged(e) {
        let selectedTag = e.currentTarget.value;
        let eventID = "";
        if(selectedTag.includes("child-component-")){
            eventID = selectedTag.split("child-component-")[1];
        }
        else{
            eventID = selectedTag.split("-")[1];
        }

        /**
         * Highlight the selected in the preview
         */

        highlightItem(eventID);

        this.setState({
            selectedTag: e.currentTarget.value,
            selectedEventName: "",
            eventID: eventID,
            selectedEvent: {
                name: "",
                reducer: {
                    reducer: "",
                    publishes: [],
                    index: this.props.component.events.length
                }
            }
        })
    }



    export function updateSelectedEvent(e){
        let selectedEvent = this.props.component.events.find(event => event.name === e.currentTarget.value && this.state.eventID=== event.id);

        if(selectedEvent){
            this.setState({
                selectedEventName: e.currentTarget.value,
                selectedEvent : selectedEvent
            })
        }

        else{
            this.setState({
                selectedEventName: e.currentTarget.value,
                selectedEvent : {
                    name: e.currentTarget.value,
                    reducer: {
                        reducer: "",
                        publishes: [],
                        index: this.props.component.events.length
                    }
                }
            })
        }

    }