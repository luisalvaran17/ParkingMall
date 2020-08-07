import React, { Component } from 'react'
import scanQR from './images/scan.png';
import logo from './images/logoPM.jpg'
import './styles/introQR.css'

export class IntroQR extends Component {
    render() {
        return (
            <div className="container">
                <h2>qr code</h2>
                <div className="container">
                    <img src={scanQR} class="img-fluid" alt="Responsive image" />

                </div>
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col-12" >
                            <button className="btn btn-primary btn-sm">Scan</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-warning btn-sm">Next</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default IntroQR
