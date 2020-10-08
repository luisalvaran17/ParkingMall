import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import '../assets/styles/components/SideBar.css';

class SideBar extends React.Component {

  render() {
    const preventDefault = (event) => event.preventDefault();

    return (
      <MenuList>
        <br />
        <h3>Pisos</h3>
        <h4>Piso 1</h4>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id="zona">
            <h5>Zona 1</h5>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id="zona">
            <h5>Zona 2</h5>
          </Link>
        </MenuItem>
        <h4>Piso 2</h4>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id="zona">
            <h5>Zona 1</h5>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#" onClick={preventDefault} id="zona">
            <h5>Zona 2</h5>
          </Link>
        </MenuItem>
      </MenuList>
    );
  }
}

export default SideBar;