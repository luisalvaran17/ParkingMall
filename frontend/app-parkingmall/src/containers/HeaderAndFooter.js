import React, { Component } from 'react';
import '../assets/styles/components/head_foo_scanQR.css';
import '../assets/App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridParking from '../components/GridParking'

class HeaderAndFooter extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white' }} >
                <Header /> {/* Header component jsx */}

                <GridParking letter="j" number="5" />

                <Footer /> {/* Footer component jsx */}

            </div>
        );
    }
}

export default HeaderAndFooter;