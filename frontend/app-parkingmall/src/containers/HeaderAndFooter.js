import React, { Component } from 'react';
import '../assets/styles/components/head_foo_scanQR.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class HeaderAndFooter extends Component {
    render() {
        return (
            <div>
                <Header /> {/* Header component jsx */}

                <div className='container'>
                    <h1>Contenido</h1>
                </div>
                
                <Footer /> {/* Footer component jsx */}
            </div>
        );
    }
}

export default HeaderAndFooter;