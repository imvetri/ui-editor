import MessagesComponent from "../MessagesComponent";

function getMessages (message) {
    let messages = [{
        type: "info",
        text: `INFO: Preview is not working because ${message}`
    }]
    return (
        <MessagesComponent messages={messages} />
    );
}

export default getMessages;