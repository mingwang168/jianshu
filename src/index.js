import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Globalstyle } from "./style.js";

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>,
  document.getElementById("root")
)