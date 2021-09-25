import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Components/Home/Home"
import Traffic from "./Components/Traffic/Traffic"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/HomePage" component = {Home} />
        <Route exact path = "/Traffic" component = {Traffic} />
      </Switch>
    </Router>
  );
}

export default App;
