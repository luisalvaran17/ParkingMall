import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {Link, Redirect} from 'react-router-dom'
import '../assets/styles/components/SideBar.css';
import RenderParking from "../components/RenderParking"
import HeaderAndFooter from "../containers/MainPiso1"

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {checkPiso: "piso 1"}
  }

  render() {
    const preventDefault1 = (event) => this.state.checkPiso = "piso 1"
    const preventDefault2 = (event) => this.state.checkPiso = "piso 2"

    if(this.state.checkPiso === "piso 1"){
    return (
      <MenuList>
        <br />
        <h3>Pisos</h3>
        <MenuItem>
          <Link to="/" onClick={preventDefault1} id="zona">
            <h4>Piso 1</h4>
          </Link>
        </MenuItem>
            <h5 className="disableZone">Zona 1</h5>
            <h5 className="disableZone">Zona 2</h5>
        
        <MenuItem>
          <Link to="/piso2" onClick={preventDefault2} id="zona">
            <h4>Piso 2</h4>
          </Link>
        </MenuItem>
            <h5 className="disableZone">Zona 1</h5>
            <h5 className="disableZone">Zona 2</h5>
      </MenuList>
    );
    }
    else if(this.state.checkPiso === "piso 2"){
      preventDefault1()
      return(
        <Link to="/piso2" className="p-2 text-dark" target="_blank" onClick={(event) => { 
                window.open();}}>try1</Link>
      )
    }
    else{
      preventDefault2()
      return(
        <Redirect to="/"></Redirect>
      )
    }
  }
}

export default SideBar;