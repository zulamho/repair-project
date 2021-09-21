import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SigninUpPage from "./pages/SigninUpPage/SigninUpPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signinUp">
          <SigninUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
