import React, { Component } from 'react';
import logo from './images/logoPM.jpg';
import userLogo from './images/logo_usuario.jpg'
import './styles/styles.css';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import DropdownButton from 'react-bootstrap/Dropdown'
import Dropdown from 'react-bootstrap/Dropdown'

class HeaderAndFooter extends Component {
    render() {
        return (
            <div>
                <div class="d-flex flex-column flex-md-row align-items-left p-1 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <a class="navbar-brand" href="#">
                        <img src={logo} style={{width:"60px"}} alt="logo app"/>
                    </a>
                    <h5 class="tittleBrand my-0 mr-md-auto">ParkingMall</h5>
                    <nav class="my-2 my-md-0 mr-md-3 textNav">
                        <a class="p-2 text-dark" href="#">Scan QR</a>
                        <a class="p-2 text-dark" href="#"></a>
                        <a class="p-2 text-dark">Username</a>
                    </nav>
                    <Dropdown>
                    <Dropdown.Toggle variant="" id="">
                    <img className='userLogo' src={userLogo} alt="Img usuario"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-3">Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className='container'>
                    <h1>Contenido</h1>
                </div>
                <nav class="navbar fixed-bottom navbar-expand-sm p-3 FooterColor">
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
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </nav>
            </div>
        );
    }
}

export default HeaderAndFooter;