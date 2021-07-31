import "./App.css";

import NavBar from "./components/NavBar";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Switch } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
