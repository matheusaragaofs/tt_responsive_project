import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import {  BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyle/globalStyle'
import { CustomersProvider } from './hooks/customers/index';

ReactDOM.render(
    <CustomersProvider>
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <GlobalStyle/>
  </React.StrictMode>
    </CustomersProvider>,
  document.getElementById('root')
);

