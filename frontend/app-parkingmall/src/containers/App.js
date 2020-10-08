import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../components/Login";
import ScanQR from "../containers/ScanQR";
import HeaderAndFooter from "../containers/HeaderAndFooter";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={HeaderAndFooter} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/ScanQR" component={ScanQR} />
  </BrowserRouter>
);

export default App;
