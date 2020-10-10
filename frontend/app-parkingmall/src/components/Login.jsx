import React, { Component } from "react";
import logo from "../assets/images/logoPM.jpg";
import "../assets/styles/components/Login.css";
import {Link, Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    userCorrect: false,
  };

  handleClick = (e) => {
    // console.log(this.state.credentials)
    fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => {
        console.log(data);
        if(data.ok === true){
          //console.log("redirect")
          this.setState({userCorrect: true})
        }
        else{
          // ... nothing
        }
      })
      .catch((error) => console.error(error));
  };

  handleChange = (e) => {
    const cred = this.state.credentials;
    cred[e.target.name] = e.target.value;
    this.setState({ credentials: cred });
    //console.log(e.target.value);
    //console.log(e.target.value);
  };


  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(this.state);
  };

  
  render() {
    if(this.state.userCorrect !== true){
      return (
        <div className="wrapper fadeInDown">
          <div id="formContent">

            <div className="fadeIn first">
              <h3 className="titleBrand">ParkingMall</h3>
            </div>

            <div className="fadeIn first">
              <img src={logo} id="icon" alt="User Icon" />
            </div>

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="username"
                placeholder="Nombre de usuario"
                onChange={this.handleChange}
                value={this.state.credentials.username}
              />
              <input
                type="password"
                id="password"
                className="fadeIn third pass"
                name="password"
                placeholder="Contraseña"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button 
                type="submit"
                className="btn btn-warning btn-xl fadeIn fourth"
                style={{padding:"10px", paddingLeft:"70px", paddingRight:"70px", marginTop:"30px", marginBottom:"30px"}}
                value="Log In"
                onClick={this.handleClick}
                text="Ingresar">Ingresar</button>
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          </div>
      );
    }
    if(this.state.userCorrect){

      this.componentDidMount()
      return(
        <Redirect to='/' children="None" />
      )
    }
  }componentDidMount() {
    const { match } = this.props;
    if(match.url === "/"){
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
         window.history.pushState(null, document.title,  window.location.href);
      });
    }      
 }
}



export default Login;