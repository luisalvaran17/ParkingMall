import React  from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

export default function Footer(){
    return(
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
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
