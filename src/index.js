import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Search from "./containers/Search";
import Player from "./components/Player";

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

let App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/video/:id" component={Player}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
