import React from "react";
import Context from "./context";

const valoresPorDefecto = {
  name: "",
  setName: name => (valoresPorDefecto.name = name)
};

const ContenedorContexto = props => (
  <Context.Provider value={valoresPorDefecto}>
    {props.children}
  </Context.Provider>
);

export default ContenedorContexto;