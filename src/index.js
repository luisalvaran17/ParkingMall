import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import IntroWelcome from './pages/IntroWelcome';
import IntroQR from './pages/IntroQR';
import Splash from './pages/Splash';
import MainPage from './pages/MainPage';

ReactDOM.render(
    <Splash />,
    document.getElementById('root')
);
