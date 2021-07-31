import "./App.css";

import NavBar from "./components/NavBar";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Switch } from "react-router";

import React, { useState } from "react";

import { auth } from "./firebase";

import { useEffect } from "react";
function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <NavBar user={user} />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Todo user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
