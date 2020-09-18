import React, { Component } from 'react';
import logo from './images/logoPM.jpg';
import imageScanMobileQR from './images/scanmobile.png'
import './styles/styles.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

class ScanQR extends Component {
    render() {
        return (
            <div className='container'>
                <div className="d-flex flex-column flex-md-row align-items-center p-6 px-md-0 mb-1 bg-white">
                    <div className='marginContainerScanQR' >
                        <div className='col-sm' style={{padding:'0'}}>
                            <img className='logoParkingMall' src={logo} alt=""/>
                            <h5 className="tittleBrand my-0 mr-md-auto">ParkingMall</h5>
                        </div>
                    </div>
                </div>

                <div className='marginContainerScanQR'>
                    <div className='row'>
                        <div className='col-sm-8 col-xl-8' >
                            <div className='row'>
                                <div className='col-sm'>
                                    <h6 className='h6TitleScan'>SCAN QR</h6>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm'>
                                    <p className='textDescripcionQR'>Activa la cámara y apunta tu teléfono hacia esta pantalla para escanear el código.</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='contenedorEspacioAsignado'>
                                <div className='row' >
                                    <div className='col-sm'>
                                        <h3>Espacio asignado</h3>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm'></div>
                                    <div className='col-sm'>
                                        <div><h4>Piso</h4></div>
                                        <div><h1>5</h1></div>
                                    </div>
                                    <div className='col-sm'>
                                        <div><h4>Zona</h4></div>
                                        <div><h1>5</h1></div>
                                    </div>
                                    <div className='col-sm'></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-sm-4 col-xl'>
                            <div className='row'>
                                <img className='imageScanMobileQR' src={imageScanMobileQR}/>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar FooterColor fixed-bottom navbar-expand-sm p-3 ">
                <div className='container-sm textTitles' style={{}}>
                    <div className='sm-3'>
                        <h5 class="tittleBrand my-0 mr-md-auto">ParkingMall</h5>
                        <p class="my-0 mr-md-auto">© Copyright 2020</p>
                    </div>
                    <div className='sm-3'>
                        <h6>Centro Comercial</h6>
                        <p>Nombre</p>
                    </div>
                    <div className='sm-3'>
                        <h6>Telf</h6>
                        <p>+57 123456</p>
                    </div>
                    <div className='sm-3'>
                        <h6>Dirección</h6>
                        <p>av siempre viva</p>
                    </div>
                    <div className='sm-3'>
                        <a href='https://www.facebook.com/'> <AiFillFacebook /></a>
                        <a href='https://www.instagram.com/'> <AiFillInstagram /></a>
                        <a href='https://twitter.com/'> <AiFillTwitterSquare /></a>
                    </div>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </nav>
            </div>
        );
    }
}

export default ScanQR;