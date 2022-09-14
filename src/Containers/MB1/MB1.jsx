import React, {useContext, useState} from 'react';
import img18 from './img/img18.png';
import img19 from './img/img19.png';
import img20 from './img/img20.png';
import img21 from './img/img21.png';
import swap from './img/swap.png';
import cart from './img/cart.png';
import turn from './img/turn.png';
import lateua from './img/logo.png';
import { useNavigate } from 'react-router-dom';

import './MB1.css';

const MB1 = () => {

    let navigate = useNavigate();

    const Turn = () => {
        setTimeout(() => {
        navigate('/moodboard');
    }, 200);
    }
    const Detail = () => {
        setTimeout(() => {
        navigate('/detail');
    }, 200);
    }

    return (
        <div className="designDetail">
            <div className="mb">
                <img src={lateua} alt="logo" id="logo"/>
                <div className="col">Colores: 
                    <div className="dotcolors1">
                        <div className="dot1b"></div>
                        <div className="dot2b"></div>
                        <div className="dot3b"></div>
                        <div className="dot4b"></div>
                        <div className="dot5b"></div>
                    </div>
                </div>
                <img src={img18} alt="Moodboard1" id="mood1" />
                <div className="sel" id= "sel1" onClick= {Detail}>
                    <div className="selint" id= "selint1"></div>
                </div>
                <div className="sel" id= "sel2">
                    <div className="selint" id= "selint2"></div>
                </div>
                <div className="sel" id= "sel3">
                    <div className="selint" id= "selint3"></div>
                </div>
                <div className="sel" id= "sel4">
                    <div className="selint" id= "selint4"></div>
                </div>
                <div className="sel" id= "sel5">
                    <div className="selint" id= "selint5"></div>
                </div>
                <div className="sel" id= "sel6">
                    <div className="selint" id= "selint6"></div>
                </div>
                <div className="sel" id= "sel7">
                    <div className="selint" id= "selint7"></div>
                </div>
                <div className="sel" id= "sel8">
                    <div className="selint" id= "selint8"></div>
                </div>
                <div className="sel" id= "sel9">
                    <div className="selint" id= "selint9"></div>
                </div>
                <div className="sel" id= "sel10">
                    <div className="selint" id= "selint10"></div>
                </div>
                <div className="turn" onClick={Turn}><img src={turn} alt="return" srcset="" /></div>
            </div>
        </div>
    )

}

export default MB1;