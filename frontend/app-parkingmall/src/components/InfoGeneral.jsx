import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import '../assets/styles/components/InfoGeneral.css';

class InfoGeneral extends React.Component {
  render() {
    return (
      <Grid item xs>
          <h3><center>Información general</center></h3>
        <Divider variant="middle" />
          <div id='informacion'>
              <div><h2>20 </h2> <h6><br/><center>Lugares <br/> disponibles</center></h6></div>
              <div><h2>40 </h2> <h6><br/><center>Lugares <br/> reservados</center></h6></div>
              <div><h2>20 </h2> <h6><br/><center>Total <br/> vehículos</center></h6></div>
          </div>
      </Grid>
    );
  }
}

export default InfoGeneral;