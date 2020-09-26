import React from 'react';
import imgCarUp from '../assets/images/imgCarUp.jpg';
import imgCarDown from '../assets/images/imgCarDown.jpg';
import imgArrowLeft from '../assets/images/arrow_left.png';
import imgArrowRight from '../assets/images/arrow_right.png';

export default function GridParking(){
    return(
        <div className='container' >
            <div className='row borderRowTop'>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col col-xl'><img className='carSize' src={imgCarUp}  alt="car"></img></div>
            </div>
            <div className='row rowArrows'>
                <div className='col-sm'><img src={imgArrowLeft}  alt="zona 2"></img>Zona 2</div>
                
            </div>
            <div className='row borderRowBottom'>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col col-xl'><img className='carSize' src={imgCarDown}  alt="car"></img></div>
            </div>
            <div className='row rowPiso '>
                <div className='col-sm'><h5 className="titlePiso">Piso 1</h5></div>
            </div>
            <div className='row borderRowTop'>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarUp} alt="car"></img></div>
                <div className='col col-xl'><img className='carSize' src={imgCarUp} alt="car"></img></div>
            </div>
            <div className='row rowArrows'>
                <div className='col'>Zona 1<img src={imgArrowRight} alt="zona 1"></img></div>
            </div>
            <div className='row borderRowBottom'>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col gridColumns'><img className='carSize' src={imgCarDown} alt="car"></img></div>
                <div className='col'><img className='carSize' src={imgCarDown} alt="car"></img></div>
            </div>
            <div className="row" style={{marginTop:"20px"}}>Salida | Entrada</div>
        </div>
    );
}
