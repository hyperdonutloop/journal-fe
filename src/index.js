import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.css';
import App from './App';

import ScrollToTop from './components/Scroll.js';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);


