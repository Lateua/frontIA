import React, { useState, useContext } from 'react';
import Button from '../../Components/Button/Button';
import Context from "../../context/context";
import './Name.css';
import { useNavigate } from 'react-router-dom';

const Name = (props) => {
    const context = useContext(Context);
    const [name, setName] = useState("");
    const handleNameChange = e => setName(e.target.value);
    const handleNameSubmit = e => {
        e.preventDefault();
        context.setName(name);
      };
let navigate = useNavigate();
const Nav = () => {
    setTimeout(() => {
        navigate('/home');
    }, 200);
}

    return (
        <div className="designName">
            <div className="hi1">
                <h1>¡Hola!</h1><br />
                <h2>Bienvenid@ a Lateua</h2><br />
            </div>
            
            <div className="requirements1">
                <div className="text">¿Cómo te llamas?
                    <form onSubmit={handleNameSubmit}>
                        <input type="text" id="name" value={name} placeholder='Escribe aquí tu nombre' onChange={handleNameChange} />
                        <input type="submit" id= "submit" value="Continuar" onClick={Nav}/>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Name;