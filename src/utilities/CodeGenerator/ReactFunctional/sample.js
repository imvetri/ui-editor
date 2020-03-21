// Code this up - https://www.robinwieruch.de/react-function-component
`
import React, { useState } from 'react';

function ${component.name}(props) {

    ${component.events.map(event=>{
        if(event.publishable){
            return `
            
            function ${event.id+event.name} (e) {
                var state = JSON.parse(JSON.stringify(this.state))
                ${event.reducer}
                this.setState(state);
                e.state = state;
                this.props.${event.publishName}? this.props.${event.publishName}(e):null;
            }
            
            `
        }

        return `
            function ${event.id+event.name} (e) {
                var state = JSON.parse(JSON.stringify(this.state))
                ${event.reducer}
                this.setState(state);
            }
        `
    }).join("\n")}

    return ${component.markup};
}`