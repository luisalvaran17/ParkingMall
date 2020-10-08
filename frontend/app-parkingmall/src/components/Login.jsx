import React, { Component } from "react";
import logo from "../assets/images/logoPM.jpg";
import "../assets/styles/components/Login.css";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
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
      })
      .catch((error) => console.error(error));
  };

  handleChange = (e) => {
    const cred = this.state.credentials;
    cred[e.target.name] = e.target.value;
    this.setState({ credentials: cred });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={logo} id="icon" alt="User Icon" />
          </div>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="username"
              placeholder="login"
              onChange={this.handleChange}
              value={this.state.credentials.username}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third pass"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={this.handleClick}
            />
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
}

export default Login;
