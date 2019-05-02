import MessagesComponent from "../MessagesComponent";

function getMessages () {
    let messages = [{
        type:"error",
        text:"ERROR : "+nodeTree.error+"developer log: look in console related to eval"
    }]
    return (
        <MessagesComponent messages = {messages}/>
    )
}

export default getMessages;