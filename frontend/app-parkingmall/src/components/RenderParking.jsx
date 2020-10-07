import React, { Component, useState } from 'react';
import imgCarUp from "../assets/images/imgCarUp.jpg";
import special from "../assets/images/Discapacidad.jpg";
import imgArrowLeft from "../assets/images/arrow_left.png";
import imgArrowRight from "../assets/images/arrow_right.png";
import available from "../assets/images/1200px-Check_green_icon.svg.png";
import available2 from "../assets/images/available2.jpg";
import InfoGeneral from './InfoGeneral'

class RenderParking extends Component {
  constructor(props){
    super(props);
    this.state = {carMatrix: [[],[],[],[]], carList1:[], carList2:[], carList3:[], carList4:[], 
      carValue:{carAvailable: 0, carReserved: 0,carNumber:0}};
  }

  randomGenerator(){
    let random = 0 

    this.state.carValue.carAvailable= 0
    this.state.carValue.carReserved= 0
    this.state.carValue.carNumber=0
    
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

    console.log("Reservados "+ this.state.carValue.carReserved)
    console.log("Disponibles "+ this.state.carValue.carAvailable)
    console.log("Número de autos "+ this.state.carValue.carNumber)

    return(
      this.updateState(this.state.carMatrix)
    ) 
  } 

  updateState(matrixUpdate){
    let listLabels = [[],[],[],[]]
    let lenMatrix = matrixUpdate.length
    for (let i = 0; i < lenMatrix; i++) {
      for (let j = 0; j < lenMatrix*2; j++) {
        if (matrixUpdate[i][j] === 0){
          listLabels[i][j] = "special"
        }
        else if(matrixUpdate[i][j] === 1){
          listLabels[i][j] = "available"
        }
        else{ 
          listLabels[i][j] = "not_available"
        }
      }
    }

    let carListLocal1 = this.setListCars(listLabels[0], "A", 1)
    let carListLocal2 = this.setListCars(listLabels[1], "A", 9)
    let carListLocal3 = this.setListCars(listLabels[2], "A", 17)
    let carListLocal4 = this.setListCars(listLabels[3], "A", 25)

    this.setState({carList1: carListLocal1, carList2: carListLocal2,
      carList3: carListLocal3, carList4: carListLocal4})
  }

  setListCars(listLabelCars, letter, number){
    let carList = []
    for (let index = 0; index < listLabelCars.length; index++) {
      if (listLabelCars[index] === "special"){
        carList.push(
          <div className="col gridColumns">
              <img
                id={number}
                className="carSize"
                src={special}
                alt="available"
                style={{width:"50%"}}
              ></img>
              <h5 title={number}>
                {letter} 
                {number++}
              </h5>
            </div>
          );
      }
      else if(listLabelCars[index] === "not_available"){
        carList.push(
          <div className="col gridColumns">
              <img
                id={number}
                className="carSize"
                src={imgCarUp}
                alt="available"
                style={{width:"50%"}}
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
                src={available}
                alt="available"
                style={{width:"40%"}}
              ></img>
              <h5 title={number}>
                {letter} 
                {number++}
              </h5>
            </div>
          );
      }
    }
    return carList
  }

  render(){
    return(
      <div className="container parking">

        <div className="row borderRowTop">{this.state.carList1}</div>

        <div className="row rowArrows">
          <div className="col-sm ">
            <img src={imgArrowLeft} alt="zona 2"></img>Zona 2
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
            Zona 1<img src={imgArrowRight} alt="zona 1"></img>
          </div>
        </div>

        <div className="row borderRowBottom">{this.state.carList4}</div>
        {/*<div>
          <button className="btn btn-info" type="button">
          available
          </button>
          <button className="btn btn-danger" type="button">
            Special people
          </button>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          Salida | Entrada
        </div>*/}

      <InfoGeneral
        car={this.state.carValue}
      />
    </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.randomGenerator(), 3500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default RenderParking;
