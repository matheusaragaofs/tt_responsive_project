import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import {  BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyle/globalStyle'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />

    </Router>
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

