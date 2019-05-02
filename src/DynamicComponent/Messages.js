import MessagesComponent from "../MessagesComponent";

function getMessages () {
    let messages = [{
        type: "info",
        text: "INFO: Preview is not working because preview is not clicked. "
    }]
    return (
        <MessagesComponent messages={messages} />
    );
}

export default getMessages;