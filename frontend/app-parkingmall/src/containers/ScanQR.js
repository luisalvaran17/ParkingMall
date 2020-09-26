import { Component } from 'react';
import logo from '../assets/images/logoPM.jpg'
import imageScanMobileQR from '../assets/images/scanmobile.png'
import '../assets/styles/components/head_foo_scanQR.css';
import Footer from '../components/Footer' 

class ScanQR extends Component {
    render() {
        var React = require('react');
        var QRCode = require('qrcode.react');
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
                        <QRCode value="http://facebook.com" />
                        <div className='col-sm-4 col-xl'>
                            <div className='row'>
                                <img className='imageScanMobileQR' src={imageScanMobileQR} alt='Scan Qr'/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default ScanQR;