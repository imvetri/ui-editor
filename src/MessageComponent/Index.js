// Libraries.

import React, { Component } from "react";

import "./style.lcss";

class MessageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let  message = this.props.message;

        if(message.type === "error" || message.type=== "info") {
            return (
                <div className={style[message.type]}>
                    <code>{message.text}</code>
                </div>
            )
        }
        else{
            console.error(message.type + " is unidentified message type for <MessagesComponent/>. Please use either 'error' or 'info' only. If you require a different type, raise an issue, send a PR")
            return  (
                <div className="console">
                    <div className="eerror">
                        <code>{"error : unidentified message type. Please use either error/ info only"}</code>
                    </div>
                </div>
            )
        }
    }

}

export default MessageComponent;