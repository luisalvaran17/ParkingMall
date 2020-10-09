import { Component } from 'react';
import logo from '../assets/images/logoPM.jpg'
import imageScanMobileQR from '../assets/images/scanMobile.png'
import '../assets/styles/components/head_foo_scanQR.css';
import Footer from '../components/Footer' 
import {Link} from 'react-router-dom'

class ScanQR extends Component {
    state = {
        cadenaEspacioAsignar: ["1", "3", "3"]
    };
    
    convertirCadena = () => {
    let arregloEspacio = this.state.cadenaEspacioAsignar;
    let mensaje = "";
    for (let i = 0; i < 1; i++) {
        mensaje =
        "Piso " +
        arregloEspacio[0] +
        " Zona " +
        arregloEspacio[1] +
        " Puesto " +
        arregloEspacio[2];
    }
    //console.log(mensaje);
    console.log(mensaje);
    return mensaje;
    };

    render() {
        var React = require('react');
        var QRCode = require('qrcode.react');
 
        return (
            <div style={{backgroundColor:"white"}}>
                <div className='container'>
                    <div className="d-flex flex-column flex-md-row align-items-center p-6 px-md-0 mb-1 bg-white">
                        <div className='marginContainerScanQR' >
                            <div className='col-sm' style={{padding:'0', textAlign:'center'}}>
                                <img className='logoParkingMall' src={logo} alt=""/>
                                <Link to="/" className="titleBrand my-0 mr-md-auto">ParkingMall</Link>
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
                                        <div className='col-sm-12'>
                                            <h1>Espacio asignado</h1>
                                        </div>
                                        <div className='col-sm-12'>
                                            <h4>Mira la pantalla de tu celular</h4>
                                        </div>
                                    </div>
                                    {/*<div className='row'>
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
                                    </div>*/}
                                </div>
                            </div>
                            
                            <div className='col-sm-4 col-xl'>
                                <div className='row'>
                                    {/*<img className='imageScanMobileQR' src={imageScanMobileQR} alt='Scan Qr'/>*/}
                                    <img className='imageScanMobileQR'  src={imageScanMobileQR} alt='Scan Qr'/>
                                    <QRCode value={this.convertirCadena()} fgColor="#eea236"  
                                    style={{position:'relative', marginLeft:'90px', marginTop:'-300px'}}/>
                                </div>
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