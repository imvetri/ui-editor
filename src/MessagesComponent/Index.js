// Libraries.

import React, { Component } from "react";

import "./style.lcss";

import MessageComponent from "../MessageComponent";

class MessagesComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let messages = this.props.messages;
            return (
                <div className="console">
                    {messages.map((message,index)=><MessageComponent key={index} message={message}/>)}
                </div>
            )
    }

}

export default MessagesComponent;