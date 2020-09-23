import React, { Component } from 'react';
import logo from './images/logoPM.jpg';
import '../assets/styles/components/Login.scss';

class Login extends Component {
    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={logo} id="icon" alt="User Icon" />
                    </div>

                    <form>

                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login;
