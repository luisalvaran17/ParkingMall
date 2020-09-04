import React, { Component } from 'react'
import scanQR from './images/scan.png';
import './styles/styles.css'

export class IntroQR extends Component {
    render() {
        return (
            <div className="container" id="containerQR">
                <h2 className="tituloQR">qr code</h2>
                <div className="container-fluid" style={{marginTop:"20px"}}>
                    <img src={scanQR} class="img-fluid" id="imgQR" alt="Responsive image" />
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p className="text-center descripcion-intro" style={{marginTop:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row" style={{ paddingBottom: "10px" }}>
                        <div className="col-12" >
                            <button className="btn btn-primary btn-sm">Siguiente</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-warning btn-sm">Saltar</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default IntroQR
