import React from "react";

import "./message.css";

export default function Message(props) {
  return (
    <div className={`message ${props.self ? "self" : ""}`}>
      <div className="content">{props.message}</div>
    </div>
  );
}
