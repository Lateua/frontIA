import React from 'react';
import img18 from './img/img18.png';
import img19 from './img/img19.png';
import img21 from './img/img21.png';
import swap from './img/swap.png';
import turn from './img/turn.png';
import lateua from './img/logo.png';
import img20 from './img/img20.png';
import img30 from './img/img30.png';
import img29 from './img/img29.png';
import { useNavigate } from 'react-router-dom';

import './Detail.css';

const Detail = () => {

    let navigate = useNavigate();
    const Nav = () => {
        setTimeout(() => {
        navigate('/shopping');
    }, 200);
    }
    const Turn = () => {
        setTimeout(() => {
        navigate('/moodboard');
    }, 200);
    }
    const detail2 = () => {
        setTimeout(() => {
        navigate('/detail2');
    }, 200);
    }
    const detail3 = () => {
        setTimeout(() => {
        navigate('/detail3');
    }, 200);
    }
    const detail4 = () => {
        setTimeout(() => {
        navigate('/detail4');
    }, 200);
    }
    const detail5 = () => {
        setTimeout(() => {
        navigate('/detail5');
    }, 200);
    }

    return (
        <div className="designDetail">
            <div className="mb">
                <img src={lateua} alt="logo" id="logo" />
                <div className="titulo">Completa tu diseño</div>
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
                <div className="turn" onClick={Turn}><img src={turn} alt="return" srcset="" /></div>
            </div>
            <div className="sideBar">
                <div className="sideBarTitle">
                    Artículos (4)
                </div>
                <div className="sideBarContent">
                    <div className="element">
                        <div className="button1" onClick = {detail2}>
                            <img src={swap} alt="swap"/>
                            Cambio
                        </div>
                        <div className="elementTitle">
                            <img src={img19}alt="element1" />
                            <div className="elementText">Sofá Paolo - 1297€</div>
                        </div>
                        <div className="buttons">
                            <div className="button2">Añade al carrito</div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="button1" onClick = {detail3}>
                            <img src={swap} alt="swap" />
                            Cambio
                        </div>
                        <div className="elementTitle">
                            <img src={img30} alt="element2" />
                            <div className="elementText">Sofá Blue - 989€</div>
                        </div>
                        <div className="buttons">
                            
                            <div className="button2">Añade al carrito</div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="button1" onClick = {detail5}>
                            <img src={swap} alt="swap" />
                            Cambio
                        </div>
                        <div className="elementTitle">
                            <img src={img20} alt="element3" />
                            <div className="elementText">Sofá Ganis - 1199€</div>
                        </div>
                        <div className="buttons">
                            <div className="button2">Añade al carrito</div>
                        </div>
                    </div>
                    <div className="element">
                        <div className="button1" onClick = {detail4}>
                            <img src={swap} alt="swap" />
                            Cambio
                        </div>
                        <div className="elementTitle">
                            <img src={img29} alt="element4" />
                            <div className="elementText">Sofá Brown - 729€</div>
                        </div>
                        <div className="buttons">
                            <div className="button2">Añade al carrito</div>
                        </div>
                    </div>
                </div>
                <div className="shopping">
                    <a href="https://shop.lateua.es/shopping-list/oYOEu"><div className="goShopping">Ir a shopping list</div></a>
                    
                    <div className="shoppingCart">Añadir todo al carrito</div>
                </div>
            </div>
        </div>
    )

}

export default Detail;