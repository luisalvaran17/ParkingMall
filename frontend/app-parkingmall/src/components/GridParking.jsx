import React from "react";
import imgCarUp from "../assets/images/imgCarUp.jpg";
import special from "../assets/images/Discapacidad.jpg";
import imgArrowLeft from "../assets/images/arrow_left.png";
import imgArrowRight from "../assets/images/arrow_right.png";
import available from "../assets/images/1200px-Check_green_icon.svg.png";
import available2 from "../assets/images/available2.jpg";

const GridParking = ({ letter, number }) => {
  let state = { letter, number };
  let carList = [];
  let availablePark = [];
  let takenPark = [];

  const handleClick = (e) => {
    switch (e.target.alt) {
      case "available":
        e.target.alt = "car";
        e.target.src = imgCarUp;
        console.log(e.target.alt);
        break;

      case "car":
        e.target.alt = "available";
        e.target.src = available2;
        console.log(e.target.alt);
        break;

      case "special":
        e.target.alt = "carSpecial";
        e.target.src = imgCarUp;
        console.log(e.target.alt);
        break;

      case "carSpecial":
        e.target.alt = "special";
        e.target.src = special;
        console.log(e.target.alt);
        break;
    }
    console.log(e.target.id);
    console.log(carList);
  };

  const initialState = () => {
    carList = [];
    let car1 = Math.floor(Math.random() * 10) + 2;
    let car2 = Math.floor(Math.random() * 10) + 2;
    for (let i = 0; i < 10; i++) {
      if (i <= 1) {
        carList.push(
          <div className="col gridColumns">
            <img
              id={state.number}
              className="carSize"
              onClick={handleClick}
              src={special}
              alt="special"
            ></img>
            <h3 title={state.number} onClick={handleClick}>
              {state.letter}
              {state.number++}
            </h3>
          </div>
        );
      } else {
        carList.push(
          <div className="col gridColumns">
            <img
              id={state.number}
              className="carSize"
              onClick={handleClick}
              src={available2}
              alt="available"
            ></img>
            <h3 title={state.number} onClick={handleClick}>
              {state.letter}
              {state.number++}
            </h3>
          </div>
        );
      }
      if (i == car1 || i == car2) {
        carList[i] = (
          <div className="col gridColumns">
            <img
              id={state.number}
              className="carSize"
              onClick={handleClick}
              src={imgCarUp}
              alt="car"
            ></img>
            <h3 title={state.number} onClick={handleClick}>
              {state.letter}
              {state.number++}
            </h3>
          </div>
        );
      }
    }
    return carList;
  };

  return (
    <div className="container">
      <div className="row borderRowTop">{initialState()}</div>

      <div className="row rowArrows">
        <div className="col-sm ">
          <img src={imgArrowLeft} alt="zona 2"></img>Zona 2
        </div>
      </div>

      <div className="row borderRowBottom">{initialState()}</div>

      <div className="row rowPiso ">
        <div className="col-sm">
          <h5 className="titlePiso">Piso 1</h5>
        </div>
      </div>

      <div className="row borderRowTop">{initialState()}</div>

      <div className="row rowArrows">
        <div className="col">
          Zona 1<img src={imgArrowRight} alt="zona 1"></img>
        </div>
      </div>

      <div className="row borderRowBottom">{initialState()}</div>
      <div>
        <button className="btn btn-info" type="button">
          available
        </button>
        <button className="btn btn-danger" type="button">
          Special people
        </button>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        Salida | Entrada
      </div>
    </div>
  );
};

export default GridParking;
