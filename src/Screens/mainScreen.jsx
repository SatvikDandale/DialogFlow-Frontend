import React from "react";
import ChatBox from "../Components/ChatBox/chatBox";
import SplitterLayout from "react-splitter-layout";

import IntentList from "../Components/IntentList/intentList";

import "./mainScreen.css";
import "react-splitter-layout/lib/index.css";

export default function MainScreen() {
  return (
    <div className="main__screen">
      <SplitterLayout
        percentage={true}
        secondaryInitialSize={30}
        customClassName="divider__pane"
      >
        <IntentList />
        <ChatBox />
      </SplitterLayout>
    </div>
  );
}
