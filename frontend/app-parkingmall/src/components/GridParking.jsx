import React from "react";
import imgCarUp from "../assets/images/imgCarUp.jpg";
import imgCarDown from "../assets/images/imgCarDown.jpg";
import imgArrowLeft from "../assets/images/arrow_left.png";
import imgArrowRight from "../assets/images/arrow_right.png";
import avaliabe from "../assets/images/1200px-Check_green_icon.svg.png";


const GridParking = ({ letter, number }) => {

  let carList = [];
  for (let i = 1; i <= 6; i++) {
    carList.push(
      <div className="col gridColumns">
        <img className="carSize" src={avaliabe} alt="car"></img>
        <h3>{i}</h3>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row borderRowTop">{carList}</div>

      <div className="row rowArrows">
        <div className="col-sm ">
          <img src={imgArrowLeft} alt="zona 2"></img>Zona 2
        </div>
      </div>

      <div className="row borderRowBottom">{carList}</div>

      <div className="row rowPiso ">
        <div className="col-sm">
          <h5 className="titlePiso">Piso 1</h5>
        </div>
      </div>

      <div className="row borderRowTop">{carList}</div>

      <div className="row rowArrows">
        <div className="col">
          Zona 1<img src={imgArrowRight} alt="zona 1"></img>
        </div>
      </div>

      <div className="row borderRowBottom">{carList}</div>
      <div className="row" style={{ marginTop: "20px" }}>
        Salida | Entrada
      </div>
    </div>
  );
};

export default GridParking;
