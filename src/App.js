import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from './pages/login';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}
