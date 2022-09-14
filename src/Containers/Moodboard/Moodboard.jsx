import React, {useContext} from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.png';
import img7 from './img/img7.jpg';
import img8 from './img/img8.png';
import img9 from './img/img9.png';
import img10 from './img/img10.png';
import img11 from './img/img11.png';
import img12 from './img/img12.png';
import img13 from './img/img13.png';
import img14 from './img/img14.jpeg';
import img15 from './img/img15.webp';
import img16 from './img/img16.jpeg';
import img17 from './img/img17.png';
import img18 from './img/img18.png';
import Context from "../../context/context";
import './Moodboard.css';
import { useNavigate } from 'react-router-dom';

const Moodboard = (props) => {
    const context = useContext(Context);
    let navigate = useNavigate();
    const Nav = () => {
        setTimeout(() => {
        navigate('/mb1');
    }, 200);
}

    return (
        <div className="designMoodboard">
            <div className="hi2">
                <h1>Hola {context.name},</h1>
                <h2>Bienvenida de nuevo a tu hogar</h2>
                <div className="text1">Diseñado única y exclusivamente para ti.</div>
            </div>
            <div className="reference">
                <div className="img">
                    <div className="row1">
                        <div className="imagen img1"><img src={img1} alt="img1" height="300em" width="350em"/></div>
                        <div className="imagen img2"><img src={img2} alt="img2" height="300em" width="350em" /></div>
                    </div>
                    <div className="row2">
                        <div className="imagen img3"><img src={img3} alt="img3" height="300em" width="350em"/></div>
                        <div className="imagen img4"><img src={img4} alt="img4" height="300em" width="350em"/></div>
                        <div className="imagen img5"><img src={img5} alt="img5" height="300em" width="350em"/></div>
                    </div>
                </div>
                <div className="background"></div>
            </div>
            <div className="concept">
                <div className="text2"><p id='c1'>Concepto</p><p>Elegancia</p><p>Atemporalidad</p><p>Calidez</p></div>
                <div className="bg">
                    <div className="bg1"><img src={img6} alt="concepto"/></div>
                </div>
            </div>
            <div className="styles">Estilos
                <div className="circle"><div className="circleInt"></div></div>
                <div className="legend">
                    <div className="legend1"><div className="dot1"></div>60% Neoclásico</div>
                    <div className="legend2"><div className="dot2"></div>20% Ecléctico</div>
                    <div className="legend3"><div className="dot3"></div>15% Natural</div>
                </div>
                <div className="def"><p>El proyecto se desarrolla a partir de las tres claves conceptuales. <br /> Tus referencias junto con el estudio de las piezas claves que estas contienen nos llevan a definir un estilo. <br /> Con ello se genera un entorno estético para llevar a cabo el proyecto decorativo. Se define ecléctico, moderno, <br /> que permite jugar con materiales y texturas, creando de esta manera un espacio con personalidad y carácter.</p></div>
            </div>
            <div className="materials">
                <img src={img12} alt="mood" id = "moodMat" />
                <div className="mood">
                    <div className="components">
                        <div className="component1"><img src={img10} alt="material1" /></div>
                        <div className="component2"><img src={img7} alt="material2" /></div>
                        <div className="component3"><img src={img8} alt="material3" /></div>
                        <div className="component4"><img src={img9} alt="material4" /></div>
                    </div>
                    <div className="tapiz"><img src={img11} alt="fondo" />
                        <div className="optionsTapiz">
                            <div className="option1"><img src={img14} alt="tapiz1" /><p>Listones</p></div>
                            <div className="option2"><img src={img15} alt="tapiz2" /><p>Terciopelo</p></div>
                            <div className="option3"><img src={img16} alt="tapiz3" /><p>Tapizado</p></div>
                            <div className="option4"><img src={img17} alt="tapiz4" /><p>Papel pintado</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colors">
                <div class= "titleColors">Colores <br />Mood</div>
                <div className="bar"></div>
                <div className="defColors">Son colores que transmiten sosiego, elegancia y sofisticación. <br /> Aportarán toques de color en detalles dentro de espacios más neutros: <br /> cojines, plaids, butaca/puff. Se pueden utilizar en todas las estancias y <br /> permiten unificar ambientes cuando se establece una <br /> transición suave entre los distintos tonos. </div>
                <div className="dotcolors">
                    <div className="dot1a"></div>
                    <div className="dot2a"></div>
                    <div className="dot3a"></div>
                    <div className="dot4a"></div>
                    <div className="dot5a"></div>
                </div>
            </div>
            <div className="moodboard">
                <div className="titleMoodboard"><img src={img13} alt="Moodboard" /></div>
                <div className="defMoodboard">El mobiliario y decoración que hemos escogido para tu hogar. </div>
                <img src={img18} alt="moodboard" id="mood1"onClick={Nav}/>
            </div>
        </div>
    )

}

export default Moodboard;