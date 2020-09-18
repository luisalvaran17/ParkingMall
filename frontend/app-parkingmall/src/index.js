import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderAndFooter from './pages/HeaderAndFooter';
import ScanQR from './pages/ScanQR';
import IntroQR from './pages/IntroQR';
//import PaginaPrincipal from './pages/PaginaPrincipal';
import MainPage from './pages/MainPage';

ReactDOM.render(
  <HeaderAndFooter />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
