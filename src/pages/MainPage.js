import React, { Component } from 'react';
import logo from './images/ParkingMall.jpg';
import qr from './images/QR.jpg';
import reservado from './images/Discapacidad.jpg';
import zona from './images/Parqueadero.jpg';
import './styles/page.css';

class MainPage extends Component {
    render() {
        return (
            <div classNameName="container">
                <br /><br />

                <div className="row">
                    <div className="col">
                        <img src={logo} className="rounded float-right" />
                    </div>
                    <div className="col"> </div>
                    <div className="col">
                        <img src={qr} className="rounded float-left" />
                    </div>
                </div>

                <br /><br /><br /><br />

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1> Lugares <br/> disponibles</h1>
                    </div>
                    <div className="col">
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <img src={reservado}/>
                    </div>
                    <div className="col">
                        <label className="switch" >
                            <input type="checkbox"/>
                            <span className="slider round verde"></span>
                        </label>
                    </div>
                    <div className="col"></div>
                </div>

                <br /><br /><br />
                <img src={zona} className="rounded mx-auto d-block" />
            </div>
        );
    }
}

export default MainPage;