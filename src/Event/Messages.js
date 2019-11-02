import MessagesComponent from "../MessagesComponent";

function getMessages () {
    let messages = [{
        type: "info",
        text: "#1 INFO: Select any element in the left most pane(editor pane) to see its content"
    },{
        type: "info",
        text: "#2 INFO: Click on 'Add' to add an component"
    }]

    debugger;
    return <MessagesComponent messages={messages} />;
}

export default getMessages;