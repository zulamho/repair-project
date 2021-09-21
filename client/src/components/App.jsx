import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
