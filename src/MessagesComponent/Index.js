// Libraries.

import React, { Component } from "react";

import style from "./style.css";

import MessageComponent from "../MessageComponent";

class MessagesComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let messages = this.props.messages;
            return (
                <div className={style.console}>
                    {messages.map(message=><MessageComponent message={message}/>)}
                </div>
            )
    }

}

export default MessagesComponent;