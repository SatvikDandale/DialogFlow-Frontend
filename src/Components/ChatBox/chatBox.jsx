import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";

import MessageList from "../MessageList/messageList";
import TextBox from "../TextBox/textBox";

import { sendQuery } from "../../Services/dialogflow-service";

import "./chatBox.css";

class ChatBox extends React.Component {
  state = {
    messages: [],
  };
  sendMessage = (message) => {
    var msgObj = {
      message,
      self: true,
    };
    this.setState(
      {
        messages: [...this.state.messages, msgObj],
      },
      () => {
        let query = {
          sessionId: "abcd",
          queryInput: {
            text: {
              text: this.state.messages[this.state.messages.length - 1].message,
              languageCode: "en-US",
            },
          },
        };
        sendQuery(query).then((queryResponse) => {
          this.setState({
            messages: [
              ...this.state.messages,
              { message: queryResponse.fulfillmentText, self: false },
            ],
          });
        });
      }
    );
  };
  getScrollTop() {
    return this.refs.scrollbars.getScrollTop();
  }

  scrollbars = React.createRef();

  componentDidUpdate() {
    this.scrollbars.current.scrollToBottom();
  }
  render() {
    return (
      <div className="chat__box">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h5">Try to chat with a Coffee Shop</Typography>
          </Toolbar>
        </AppBar>
        <div className="chat__area">
          <Scrollbars
            autoHide
            className="scroll_message_list"
            ref={this.scrollbars}
          >
            <MessageList messages={this.state.messages} />
          </Scrollbars>
          <TextBox sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}

export default ChatBox;
