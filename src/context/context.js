import React from "react";

const valoresPorDefecto = {
  name: "",
  setName: () => {}
};
const contexto= React.createContext(valoresPorDefecto);
export default contexto;