import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/home/home";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
                <div className="App">

                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/signup"
                            element={<Signup />}
                        ></Route>
                        <Route
                            exact
                            path="/login"
                            element={<Login />}
                        ></Route>
                    </Routes>
                </div>
            </Router>
      </div>
    );
  }
}

export default App;
