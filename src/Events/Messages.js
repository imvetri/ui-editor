import MessagesComponent from "../utilities/Components/MessagesComponent";

function getMessages (error) {

    let messages = [{
        type:"error",
        text:"ERROR : "+error+"developer log: look in console related to eval"
    }]
    return (
        <MessagesComponent messages = {messages}/>
    )
}

export default getMessages;