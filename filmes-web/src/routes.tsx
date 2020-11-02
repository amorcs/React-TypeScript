import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Filme from "./pages/filme/Filme";
import ListaFilmes from "./pages/home/ListaFilmes";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ListaFilmes} path="/" exact />
        <Route component={Filme} path="/filme/:id"/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
