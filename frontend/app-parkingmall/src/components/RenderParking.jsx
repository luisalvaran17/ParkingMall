import React, { Component } from "react";
import imgCarUp from "../assets/images/imgCarUp.jpg";
import special from "../assets/images/Discapacidad.jpg";
import imgArrowLeft from "../assets/images/arrow_left.png";
import imgArrowRight from "../assets/images/arrow_right.png";
import available from "../assets/images/1200px-Check_green_icon.svg.png";
import disable from "../assets/images/Disable.png";
import InfoGeneral from './InfoGeneral';
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import discapacidad from "../assets/images/Discapacidad_opt.jpg";
import candado from "../assets/images/Candado_opt.png";

class RenderParking extends Component {
  constructor(props) {
    super(props);
    this.state = {carMatrix: [[0,0,1,2,1,1,1,1],
                              [0,0,1,1,1,1,1,1],
                              [0,0,1,2,1,1,2,1],
                              [0,0,1,2,1,2,1,1]] , 
                              carList1:[], carList2:[], carList3:[], carList4:[], 
      carValue:{carAvailable: 0, carReserved: 0,carNumber:0}, reservedSwitch:false,availableSwitch:false};
  }
  
  randomGenerator() {
    let random = Math.floor(Math.random() * (1 - 3)) + 3;
    let indexRandom_I = Math.floor(Math.random() * (0 - 4)) + 4;
    let indexRandom_J = Math.floor(Math.random() * (0 - 8)) + 8;

    // vars general info 
    let carAvailable = 0
    let carReserved = 0
    let carNumber = 0

    // initialize matrices  
    let carMatrix =  this.state.carMatrix
    let carMatrixAvalaible = [[0,0,1,2,1,1,1,1],
                              [0,0,1,1,1,1,1,1],
                              [0,0,1,2,1,1,2,1],
                              [0,0,1,2,1,2,1,1]]
    let carMatrixReserved = [[0,0,1,2,1,1,1,1],
                            [0,0,1,1,1,1,1,1],
                            [0,0,1,2,1,1,2,1],
                            [0,0,1,2,1,2,1,1]]
                             
    for (let i = 0; i < carMatrix.length; i++) {
      for (let j = 0; j < (carMatrix.length)*2; j++) {
        carMatrixAvalaible[i][j] = carMatrix[i][j]
        carMatrixReserved[i][j] = carMatrix[i][j] 
      }
    }

    // position update
    if( ((indexRandom_I === 0 && indexRandom_J === 0) || (indexRandom_I === 0 && indexRandom_J === 1)) || // condicional lugares zona azul
        ((indexRandom_I === 1 && indexRandom_J === 0) || (indexRandom_I === 1 && indexRandom_J === 1)) ||
        ((indexRandom_I === 2 && indexRandom_J === 0) || (indexRandom_I === 2 && indexRandom_J === 1)) ||
        ((indexRandom_I === 3 && indexRandom_J === 0) || (indexRandom_I === 3 && indexRandom_J === 1)) ){
        if(carMatrix[indexRandom_I][indexRandom_J] === 0){
          carMatrix[indexRandom_I][indexRandom_J] = 2  // pone un carro
        }
        else{
          carMatrix[indexRandom_I][indexRandom_J] = 0 // pone disponible
        }
    }
    // Resto de lugares (no zona azul), columnas (i>0 , j>2)
    else{
      if(random !== 0){ // diferente de zona azul
        carMatrix[indexRandom_I][indexRandom_J] = random
      }
      else{
        // ... nothing
      }
    }
    
    // Actualiza los estados de la información general
    this.setState({carValue:{carAvailable: carAvailable, carReserved: carReserved, carNumber: carNumber}})

    // logica de los switches (matrixAvalaible)
    if(this.state.reservedSwitch === false && this.state.availableSwitch === true){
      for (let i = 0; i < carMatrix.length; i++) {
        for (let j = 0; j < (carMatrix.length)*2; j++) {
          if(carMatrixAvalaible[i][j] === 2 || carMatrixAvalaible[i][j] === 0){ // los lugares que no estan disponibles los oculta del render
            carMatrixAvalaible[i][j] = 4 // valor de lugar en blanco
          }
        } 
      }
      this.updateInfoGeneral(carMatrixAvalaible) // actualiza los valores de la info general llamando esta fn
      return this.updateStateMatrix(carMatrixAvalaible) // retorna el render con la matriz carMatrixAvalaible
    }
    // (matrixReserverd)
    if(this.state.reservedSwitch === true && this.state.availableSwitch === false){
      for (let i = 0; i < carMatrix.length; i++) {
        for (let j = 2; j < (carMatrix.length)*2; j++) {  // inicia en la columna 2, pone en blanco los que no corresponden a zona azul
            carMatrixReserved[i][j] = 4
        } 
      }
      this.updateInfoGeneral(carMatrixReserved) // actualiza los valores de la info general llamando esta fn
      return this.updateStateMatrix(carMatrixReserved) // retorna el render con la matriz carMatrixReserved
    }

    if(this.state.reservedSwitch === true && this.state.availableSwitch === true){
      // logica
      for (let i = 0; i < carMatrix.length; i++) {
        for (let j = 0; j < (carMatrix.length)*2; j++) {
          if(carMatrixAvalaible[i][j] === 2){ // los lugares que no estan disponibles los oculta del render
            carMatrixAvalaible[i][j] = 4 // valor de lugar en blanco
          }
        } 
      }
      this.updateInfoGeneral(carMatrixAvalaible) // actualiza los valores de la info general llamando esta fn
      return this.updateStateMatrix(carMatrixAvalaible)  // retorna el render con la matriz carMatrix (matriz principal)
    }
    // (carMatrix) - si ambos switches son false
    else{
      this.updateInfoGeneral(carMatrix) // actualiza los valores de la info general llamando esta fn
      return this.updateStateMatrix(carMatrix)  // retorna el render con la matriz carMatrix (matriz principal)
    }
  }  

  updateInfoGeneral(carMatrix){ // recibe cualquier matriz definidas en la otra fn {avalaibles, reserved, all}
    for (let i = 0; i < carMatrix.length; i++) {
      for (let j = 0; j < (carMatrix.length)*2; j++) {
        if (carMatrix[i][j] === 1){ // cuenta los disponibles
          this.state.carValue.carAvailable +=  1
        }
        if (carMatrix[i][j] === 2){ // cuenta el total de carros
          this.state.carValue.carNumber +=  1
        }
        if(carMatrix[i][j]  === 0){
          this.state.carValue.carReserved += 1
        }
      }
    }
  }

  updateStateMatrix(matrixUpdate) {
    let listLabels = [[], [], [], []];
    let lenMatrix = matrixUpdate.length;
    for (let i = 0; i < lenMatrix; i++) {
      for (let j = 0; j < lenMatrix*2; j++) {
        if (matrixUpdate[i][j] === 0){
          listLabels[i][j] = "special"
        }
        else if(matrixUpdate[i][j] === 1){
          listLabels[i][j] = "available"
        }
        else if(matrixUpdate[i][j] === 2){ 
          listLabels[i][j] = "not_available"
        }
        else{
          listLabels[i][j] = "disable"
        }
      }
    }

    let carListLocal1 = this.setListCars(listLabels[0], "A", 1);
    let carListLocal2 = this.setListCars(listLabels[1], "A", 9);
    let carListLocal3 = this.setListCars(listLabels[2], "A", 17);
    let carListLocal4 = this.setListCars(listLabels[3], "A", 25);

    this.setState({
      carList1: carListLocal1,
      carList2: carListLocal2,
      carList3: carListLocal3,
      carList4: carListLocal4,
    });
  }

  setListCars(listLabelCars, letter, number){
    let carList = []
    for (let index = 0; index < listLabelCars.length; index++) {
      if (listLabelCars[index] === "special") {
        carList.push(
          <div className="col gridColumns">
            <img
              id={number}
              className="carSize"
              src={special}
              alt="available"
              style={{ width: "70%" }}
            ></img>
            <h5 title={number}>
              {letter}
              {number++}
            </h5>
          </div>
        );
      } 
      else if (listLabelCars[index] === "not_available") {
        carList.push(
          <div className="col gridColumns">
            <img
              id={number}
              className="carSize"
              src={imgCarUp}
              alt="available"
              style={{ width: "70%" }}
            ></img>
            <h5 title={number}>
              {letter}
              {number++}
            </h5>
          </div>
        );
      } 
      else if (listLabelCars[index] === "available"){
        carList.push(
          <div className="col gridColumns">
            <img
              id={number}
              className="carSize"
              src={available}
              alt="available"
              style={{ width: "60%" }}
            ></img>
            <h5 title={number}>
              {letter}
              {number++}
            </h5>
          </div>
        );
      }
      else{
        carList.push(
          <div className="col gridColumns">
              <img
                id={number}
                className="carSize"
                src={disable}
                alt="available"
                style={{width:"70%"}}
              ></img>
              <h5 title={number}>
                {letter} 
                {number++}
              </h5>
            </div>
          );
      }
    }

    return carList;
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };


  render() {
    return (
      <div className="container parking">
        <div>
          <center>
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
              <div>
                <img src={discapacidad} className="switchImg" alt="" />
                <br />
                <FormControlLabel
                  control={<Switch checked={this.state.reservedSwitch} onChange={this.handleChange} color="primary" name="reservedSwitch"/>}
                />
              </div>
              <div>
                <img src={candado} className="switchImg" alt="" />
                <br />
                <FormControlLabel
                  control={<Switch checked={this.state.availableSwitch} onChange={this.handleChange} color='secondary' name="availableSwitch"/>}
                />
              </div>
            </FormGroup>
          </FormControl>
          </center>
        </div>


        <div className="row borderRowTop">{this.state.carList1}</div>

        <div className="row rowArrows">
          <div className="col-sm ">
            <img src={imgArrowLeft} alt="zona 2"></img> Zona 2
          </div>
        </div>

        <div className="row borderRowBottom">{this.state.carList2}</div>

        <div className="row rowPiso ">
          <div className="col-sm">
            <h5 className="titlePiso">Piso 1</h5>
          </div>
        </div>

        <div className="row borderRowTop">{this.state.carList3}</div>

        <div className="row rowArrows">
          <div className="col">
            <img src={imgArrowRight} alt="zona 1"></img>Zona 1
          </div>
        </div>

        <div className="row borderRowBottom">{this.state.carList4}</div>
        {/*
        <div className="row" style={{ marginTop: "20px" }}>
          Salida | Entrada
        </div>*/}

        <InfoGeneral car={this.state.carValue} />
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.randomGenerator(), 1500);
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
  }
}

export default RenderParking;
