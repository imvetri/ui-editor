import MessagesComponent from "../MessagesComponent";

function getMessages () {
    let messages = [{
        text:"INFO: Select any tag to bind events from the Events tab",
        type:"info"
    },
    {
        text:"INFO: Click 'Preview' to see the component rendered on right most pane(Preview pane)",
        type:"info"
    }]
    return (
        <div>
            <MessagesComponent messages={messages}/>
        </div>            
    )
}

export default getMessages;