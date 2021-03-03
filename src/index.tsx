import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import GlobalStyle from './globalStyle/globalStyle'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

