import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Home from "../components/pages/HomePage/index";
import Services from "../components/pages/ProfilePage/services";
import ProfilePage from "./pages/ProfilePage/ProfilePage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/service">
          <Services />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ProfilePage" exact>
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
