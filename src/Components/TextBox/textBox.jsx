import React, { useState } from "react";

import "./textBox.css";

export default function TextBox(props) {
  const [message, setMessage] = useState("");

  return (
    <div className="text__box">
      <input
        className="message__input"
        placeholder="Enter text"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.sendMessage(message);
            setMessage("");
          }
        }}
      ></input>
      <button
        className="send__message"
        onClick={() => {
          props.sendMessage(message);
          setMessage("");
        }}
      >
        Send
      </button>
    </div>
  );
}
