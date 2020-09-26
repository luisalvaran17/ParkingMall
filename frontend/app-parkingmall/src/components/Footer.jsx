import React  from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";

export default function Footer1(){
    return(
        <div  className="FooterColor">
            <footer class="container py-5 "  style={{backgroundColor:"#edf0f4"}}> 
                <div class="row textTitles">
                    <div class="col-12 col-md">
                    <h5 class="tittleBrand my-0 mr-md-auto">ParkingMall</h5>
                    <p class="my-0 mr-md-auto">© Copyright 2020</p>
                    </div>
                    <div class="col-6 col-md">
                    <h6>Centro Comercial</h6>
                    <ul class="list-unstyled text-small">
                        <p>Nombre</p>
                    </ul>
                    </div>
                    <div class="col-6 col-md">
                    <h6>Telf</h6>
                    <ul class="list-unstyled text-small">
                        <p>+57 123456</p>
                    </ul>
                    </div>
                    <div class="col-6 col-md">
                    <h6>Dirección</h6>
                    <ul class="list-unstyled text-small">
                        <p>av siempre viva</p>
                    </ul>
                    </div>
                    <div class="col-6 col-md">
                        <ul class="list-unstyled text-small">
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