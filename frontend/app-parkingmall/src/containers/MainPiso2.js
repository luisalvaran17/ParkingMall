import React, { Component } from 'react';
import '../assets/styles/components/head_foo_scanQR.css';
import '../assets/styles/components/render_parking.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import RenderParking from "../components/RenderParking";

class MainPiso2 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white' }} >

                <Header /> {/* Header component jsx */}

                <RenderParking piso="Piso 2" letra="B"/> {/* parking component jsx */}

                <Footer /> {/* Footer component jsx */}

            </div>
        );
    }
}

export default MainPiso2;
