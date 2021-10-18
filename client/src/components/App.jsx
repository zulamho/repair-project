import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Home from "../components/pages/HomePage/index";
import Profile from "./pages/ProfilePage";
import Product from "./pages/ProductPage";
import EditProfilePage from "./pages/ProfilePage/EditProfilePage";
import ProductUserById from "./pages/ProductPage/ProductUserById";
import EditService from "./pages/ProfilePage/EditService";
import Services from "./pages/ProfilePage/Services";
//ssdsf
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
        <Route path="/profilePage" exact>
          <Profile />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/service" exact>
          <Services />
        </Route>
        <Route path="/service/:id" exact>
          <Product />
        </Route>
        <Route path="/service/user/:id" exact>
          <ProductUserById />
        </Route>
        <Route path="/editProfilePage" exact>
          <EditProfilePage />
        </Route>
        <Route path="/edit/:id" exact>
          <EditService />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
