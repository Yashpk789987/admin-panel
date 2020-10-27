import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import createStore from "./store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Frontload } from "react-frontload";
import { BrowserRouter as Router } from "react-router-dom";

const { store, history } = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
