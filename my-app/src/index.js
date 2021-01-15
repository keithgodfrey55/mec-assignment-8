import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@material-ui/core/Button";
import App from "./pages/App";
import Work from "./pages/how_works";
import Version from "./components/versions.js";
import Compatible from "./components/compatible-devices.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pages/how_works">How Inteliband Works</Link>
            </li>
            <li>
              <Link to="/components/versions.js">Versions</Link>
            </li>
            <li>
              <Link to="/components/compatible-devices.js">Compatible Devices</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Button}>
            <App />
          </Route>
          <Route path="/pages/how_works" component={Button}>
            <Work />
          </Route>
          <Route path="/components/versions.js" component={Button}>
            <Version />
          </Route>
          <Route path="/components/compatible-devices.js" component={Button}>
            <Compatible />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
