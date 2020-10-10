import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../components/Login";
import ScanQR from "../containers/ScanQR";
import MainPiso1 from "./MainPiso1";
import MainPiso2 from "./MainPiso2";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={MainPiso1} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/ScanQR" component={ScanQR} />
    <Route exact path="/piso2" component={MainPiso2} />
  </BrowserRouter>
);

export default App;
