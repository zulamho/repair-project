import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Home from "../components/pages/HomePage/index";
import Services from "./pages/ProfilePage/services";

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
