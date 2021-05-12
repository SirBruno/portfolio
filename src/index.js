import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import App from './pages/homepage/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);