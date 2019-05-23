

// IMPORTANT - Do not rename style,state,events. 

export function storeEventsGlobal(events) {

    // Automatically create ID creation rather than making user to include it.
    events.forEach(event => {
        // Fetch the id from event
        let id = event.id.split("-")[1];

        // Store the event.
        /**
         *  Example
         * window.event123 = {
         *      onClick: event.reducer
         * }
         * */
        window["event"+id] = window["event"+id] || {};
        window["event"+id][event.name] = event.reducer;
    });
}