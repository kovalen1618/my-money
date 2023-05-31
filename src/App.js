// import './App.css'

import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// Components
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady } = useAuthContext();
  
  return (
    <div className="App">
      {authIsReady && ( // Removes flickering of screen when logging in
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
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
      )}
    </div>
  );
}

export default App
