import React, {Component} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Traffic from "./Components/Traffic/Traffic"
import HomePage from "./Components/Home/Home"

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path = "/HomePage" component = {HomePage} />
            <Route exact path = "/Traffic" component = {Traffic} />
          </Switch>
        </Router>
      </div>
    );
  }

  
}

export default App;
