import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from './pages/login';
import Write from './pages/write';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
