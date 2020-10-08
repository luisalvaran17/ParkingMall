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
    this.state = {carMatrix: [[],[],[],[]], carList1:[], carList2:[], carList3:[], carList4:[], 
      carValue:{carAvailable: 0, carReserved: 0,carNumber:0}, reservedSwitch:true,availableSwitch:true};
  }

  randomGenerator() {
    let random = 0;

    this.setState({
      carValue: { carAvailable: 0, carReserved: 0, carNumber: 0 },
    });

    this.state.carValue.carAvailable= 0
    this.state.carValue.carReserved= 0
    this.state.carValue.carNumber=0

    if(this.state.reservedSwitch===false && this.state.availableSwitch===true){
      for (let i = 0; i < this.state.carMatrix.length; i++) {
        for (let j = 0; j < (this.state.carMatrix.length)*2; j++) {
          if( ((i === 0 && j === 0) || (i === 0 && j === 1)) ||
              ((i === 1 && j === 0) || (i === 1 && j === 1)) ||
              ((i === 2 && j === 0) || (i === 2 && j === 1)) ||
              ((i === 3 && j === 0) || (i === 3 && j === 1))
              )
            {
              this.state.carMatrix[i][j] = 4
          }
          else{
          random = Math.floor(Math.random() * (1 - 3)) + 3;
          this.state.carMatrix[i][j] = random 

          if(this.state.carMatrix[i][j]==2){
            this.state.carMatrix[i][j] = 4
          }
          else{
            this.state.carValue.carAvailable+=1
          }
          }
        }
      }
    }
    else if(this.state.availableSwitch===false && this.state.reservedSwitch===true){
      for (let i = 0; i < this.state.carMatrix.length; i++) {
        for (let j = 0; j < (this.state.carMatrix.length)*2; j++) {
          if( ((i === 0 && j === 0) || (i === 0 && j === 1)) ||
              ((i === 1 && j === 0) || (i === 1 && j === 1)) ||
              ((i === 2 && j === 0) || (i === 2 && j === 1)) ||
              ((i === 3 && j === 0) || (i === 3 && j === 1))
              )
            {
            random = Math.floor(Math.random() * (0 - 2)) + 2; 
            if (random !== 1)   { 
              this.state.carValue.carReserved+=1
              this.state.carMatrix[i][j] = random
            }
            else{
              this.state.carValue.carNumber+=1
              this.state.carMatrix[i][j] = 4
            }
          }
          else{
            this.state.carMatrix[i][j] = 4
          }
        }
      }
    }
    else if(this.state.availableSwitch===true && this.state.reservedSwitch===true){
      for (let i = 0; i < this.state.carMatrix.length; i++) {
        for (let j = 0; j < (this.state.carMatrix.length)*2; j++) {
          if( ((i === 0 && j === 0) || (i === 0 && j === 1)) ||
              ((i === 1 && j === 0) || (i === 1 && j === 1)) ||
              ((i === 2 && j === 0) || (i === 2 && j === 1)) ||
              ((i === 3 && j === 0) || (i === 3 && j === 1))
              )
          {
            random = Math.floor(Math.random() * (0 - 2)) + 2; 
            if (random !== 1)   { 
              this.state.carValue.carReserved+=1
              this.state.carMatrix[i][j] = random
            }
            else{
              this.state.carValue.carNumber+=1
              this.state.carMatrix[i][j] = 4
            }
          }
          else{
            random = Math.floor(Math.random() * (1 - 3)) + 3;
            this.state.carMatrix[i][j] = random 
  
            if(this.state.carMatrix[i][j]==2){
              this.state.carMatrix[i][j] = 4
            }
            else{
              this.state.carValue.carAvailable+=1
            }
          }
        }
      }
    }
    else{
      for (let i = 0; i < this.state.carMatrix.length; i++) {
        for (let j = 0; j < (this.state.carMatrix.length)*2; j++) {
          if( ((i === 0 && j === 0) || (i === 0 && j === 1)) ||
              ((i === 1 && j === 0) || (i === 1 && j === 1)) ||
              ((i === 2 && j === 0) || (i === 2 && j === 1)) ||
              ((i === 3 && j === 0) || (i === 3 && j === 1))
              )
            {
            random = Math.floor(Math.random() * (0 - 2)) + 2; 
            if (random !== 1)   { 
              this.state.carValue.carReserved+=1
              this.state.carMatrix[i][j] = random
            }
            else{
              this.state.carValue.carNumber+=1
              this.state.carMatrix[i][j] = 2
            }
          }
          else{
          random = Math.floor(Math.random() * (1 - 3)) + 3;
          this.state.carMatrix[i][j] = random 

          if(this.state.carMatrix[i][j]==2){
            this.state.carValue.carNumber+=1
          }
          else{
            this.state.carValue.carAvailable+=1
          }
          }
        }
      }
    }
    return(
      this.updateState(this.state.carMatrix)
    ) 
  } 

  updateState(matrixUpdate) {
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
    this.interval = setInterval(() => this.randomGenerator(), 3500);
  }
  componentWillUnmount() {
    // clearInterval(this.interval);
  }
}

export default RenderParking;
