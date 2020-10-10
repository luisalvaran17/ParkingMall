import React  from 'react';
import logo from '../assets/images/logoPM.jpg'
import userLogo from '../assets/images/logo_usuario.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className="d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <a className="navbar-brand" href="!#">
                <Link to="/">
                <img src={logo} style={{width:"60px"}} alt="logo app"/>
                </Link>
            </a>
            <Link to="/" className="titleBrand my-0 mr-md-auto">ParkingMall</Link>
            <nav className="my-2 my-md-0 mr-md-3 textNav">

                <Link to="/ScanQR" className="p-2 text-dark" target="_blank" onClick={(event) => {event.preventDefault(); 
                window.open(window.location.origin + "/ScanQR");}}> ScanQR</Link>
                <Link to="/" className="p-2 text-dark"> Username</Link>
                

            </nav>
            <Dropdown>
            <Dropdown.Toggle variant="" id="">
            <img className='userLogo' src={userLogo} alt="Img usuario"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link to="/Login" className="p-2 text-dark"> Cerrar Sesión </Link>
                    </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Header;