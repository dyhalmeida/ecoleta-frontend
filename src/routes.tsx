import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={CreatePoint} exact path="/create-point" />
      <ToastContainer />
    </BrowserRouter>
  );
};
export default Routes;
