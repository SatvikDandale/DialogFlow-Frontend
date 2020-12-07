import React from "react";
import Message from "../Message/message";

import "./messageList.css";

export default function MessageList(props) {
  return (
    <div className="message__list">
      {props.messages.map((message, index) => {
        return <Message {...message} key={index} />;
      })}
    </div>
  );
}
