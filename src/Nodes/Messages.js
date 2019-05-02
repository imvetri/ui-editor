import MessagesComponent from "../MessagesComponent";

function getMessages () {
    let messages = [{
        type: "info",
        text: "INFO: No element is selected"
    }]
    return (
        <MessagesComponent messages={messages} />
    );
}

export default getMessages;