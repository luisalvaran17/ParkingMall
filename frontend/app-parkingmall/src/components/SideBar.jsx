import React,{useState} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import discapacidad from "../assets/images/Discapacidad_opt.jpg";
import candado from "../assets/images/Candado_opt.png";
import '../assets/styles/components/SideBar.css';

class SideBar extends React.Component {
  
  state={
    reservedSwitch:true,
    availableSwitch:true
  }

  render() {
    const preventDefault = (event) => event.preventDefault();

    return (
      <MenuList>
        <br/>
        <h3>Pisos</h3>
        <h4>Piso 1</h4>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id='zona'>
            <h5>Zona 1</h5>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id='zona'>
            <h5>Zona 2</h5>
          </Link>
        </MenuItem>
        <h4>Piso 2</h4>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id='zona'>
            <h5>Zona 1</h5>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id='zona'>
            <h5>Zona 2</h5>
          </Link>
        </MenuItem>
        

        <div className="switches">
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <div>
                <img src={discapacidad} alt='' />
                <br/>
                <FormControlLabel
                  control={<Switch checked={this.state.reservedSwitch} color="primary" name="reservedSwitch"/>}
                />
              </div>
              <div>
                <img src={candado} id='imagen' alt=''/>
                <br/>
                <FormControlLabel
                  control={<Switch checked={this.state.availableSwitch} color='secondary' name="availableSwitch"/>}
                />
              </div>
            </FormGroup>
          </FormControl>
        </div>
      </MenuList>
    );
  }
}

export default SideBar;