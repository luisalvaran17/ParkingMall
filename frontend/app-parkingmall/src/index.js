import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderAndFooter from './pages/HeaderAndFooter';
import ScanQR from './pages/ScanQR';
import Login from './pages/Login';
//import PaginaPrincipal from './pages/PaginaPrincipal';

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

serviceWorker.unregister();
