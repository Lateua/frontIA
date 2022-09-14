import React, {useContext, useState} from 'react';
import nube from './img/nube.png';
import Button from '../../Components/Button/Button';
import Context from "../../context/context";
import FileUpload from "../../Components/File-upload/file-upload.component";
import { useNavigate } from 'react-router-dom';

import './Home.css';

const Home = (props) => {

    let navigate = useNavigate();
    const Nav = () => {
        setTimeout(() => {
        navigate('/moodboard');
    }, 200);
    }
    const context = useContext(Context);
    const [newUserInfo, setNewUserInfo] = useState({
        profileImages: []
      });
    const updateUploadedFiles = (files) =>
        setNewUserInfo({ ...newUserInfo, profileImages: files });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create a new user...
      };

    return (
        <div className="designHome">
            <div className="hi">
                <h1>Hola {context.name},</h1><br />
                <h2>Te vamos a pedir únicamente 2 cosas:</h2><br />
            </div>
            
            <div className="requirements">
                <div className="images"><form onSubmit={handleSubmit}>
                  <FileUpload
                    accept=".jpg,.png,.jpeg"
                    label="Profile Image(s)"
                    multiple
                    updateFilesCb={updateUploadedFiles}
                  />
                  <button class="submit" type="submit" id="submit1">Subir imágenes</button>
                </form></div>
                <div className="text">¿Qué presupuesto tienes para <br />amueblar la estancia?
                <input type="text" name="presupuesto" id="presupuesto" placeholder='Pon aquí tu presupuesto' /></div>
            </div>
            <div className="next" onClick={Nav}>Continuar</div>
        </div>
    )

}

export default Home;