import React, { Component } from 'react';
import logo from './images/ParkingMall.jpg';
import './styles/styles.css';

class Splash extends Component {
    render() {
        return (
            <div className="container" id="splashContenedor">
                <div className="row logo">
                    <div className="col-sm" >
                        <img className="logoPM" src={logo}></img>
                    </div>
                </div>
                <h1> Bienvenido</h1>
            </div>
        );
    }
}

export default Splash;