import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './layout/Header';
import Main from './pages/Main'
import Footer from './layout/Footer'


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
