import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './layout/Header/Header';
import Main from './pages/Main/Main'
import Footer from './layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    
    <Main />
    
  </React.StrictMode>,
  document.getElementById('root')
);
