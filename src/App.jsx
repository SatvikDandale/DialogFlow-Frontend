// LIBRARIES
import React, { useEffect } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

// COMPONENTS
import Welcome from "./Components/Welcome/welcome";

// CSS FILES
import "./App.css";
import MainScreen from "./Screens/mainScreen";

function App() {
  useEffect(() => {
    document.title = "Dialogflow Frontend";
  });

  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route path="/dialogflow" component={MainScreen} />
          <Route path="/" component={Welcome} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
