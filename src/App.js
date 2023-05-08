// import './App.css'

import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
