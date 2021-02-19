import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <nav>
        <Router>
          <Link to="/">Home</Link>
          <a href="google.com">About Me</a>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </nav>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);