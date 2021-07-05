import React, { Component } from "react";
import FriendsListView from "./views/FriendsListView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/friends-home" component={FriendsListView} />
        </div>
      </Router>
    );
  }
}

export default App;
