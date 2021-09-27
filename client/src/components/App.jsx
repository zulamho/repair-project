import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Home from "../components/pages/HomePage/index";
import Services from "./pages/ProfilePage/Services";
import Profile from "./pages/ProfilePage";
import Product from "./pages/ProductPage";

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
        <Route path="/service" exact>
          <Services />
        </Route>
        <Route path="/profilePage">
          <Profile />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/service/:id" exact>
          <Product />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
