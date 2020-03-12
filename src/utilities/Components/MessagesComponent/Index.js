// Libraries.

import React, { Component } from "react";

import "./style.css";

import MessageComponent from "../MessageComponent";

class MessagesComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let messages = this.props.messages;
            return (
                <div>
                    {messages.map((message,index)=><MessageComponent key={index} message={message}/>)}
                </div>
            )
    }

}

export default MessagesComponent;