import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Moodboard from './Containers/Moodboard/Moodboard';
import Name from './Containers/Name/Name';
import ContenedorContexto from './context/ContenedorContexto';
import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './Containers/Detail/Detail';
import Detail2 from './Containers/Detail2/Detail2';
import Detail3 from './Containers/Detail3/Detail3';
import Detail4 from './Containers/Detail4/Detail4';
import MB1 from './Containers/MB1/MB1';

function App() {
  return (
    <div className="App">
      <ContenedorContexto>
        <BrowserRouter>

              <Routes>
                <Route path="/" element={<Name />} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/moodboard" element={<Moodboard/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path= "/detail2" element= {<Detail2/>}/>
                <Route path= "/detail3" element= {<Detail3/>}/>
                <Route path= "/detail4" element= {<Detail4/>}/>
                <Route path= "/mb1" element= {<MB1/>}/>
              </Routes>

        </BrowserRouter>
        </ContenedorContexto>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
