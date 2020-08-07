import React, { Component } from 'react';
import logo from './images/ParkingMall.jpg';
import './styles/inicio.css';

class Inicio extends Component {
    render() {
        return (
            <div className="container">
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

export default Inicio;