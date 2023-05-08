// import './App.css'

import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
