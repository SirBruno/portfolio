import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/Nav'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);