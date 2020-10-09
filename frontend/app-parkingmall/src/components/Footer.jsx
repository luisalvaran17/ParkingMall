import React  from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

export default function Footer1(){
    return(
        <div  className="FooterColor">
            <footer className="container py-5 "  style={{backgroundColor:"#edf0f4"}}> 
                <div className="row textTitles">
                    <div className="col-12 col-md">
                    <h5 className="titleBrand my-0 mr-md-auto">ParkingMall</h5>
                    <p className="my-0 mr-md-auto">© Copyright 2020</p>
                    </div>
                    <div className="col-6 col-md">
                    <h6>Centro Comercial</h6>
                    <ul className="list-unstyled text-small">
                        <p>Nombre</p>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h6>Telf</h6>
                    <ul className="list-unstyled text-small">
                        <p>+57 123456</p>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                    <h6>Dirección</h6>
                    <ul className="list-unstyled text-small">
                        <p>av siempre viva</p>
                    </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul className="list-unstyled text-small">
                            <a href='https://www.facebook.com/'> <AiFillFacebook /></a>
                            <a href='https://www.instagram.com/'> <AiFillInstagram /></a>
                            <a href='https://twitter.com/'> <AiFillTwitterSquare /></a>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}