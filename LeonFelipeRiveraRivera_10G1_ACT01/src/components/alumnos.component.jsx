import { useState } from "react";
import { AlumnosListadoApp } from "./alumnos.listado.component";

export const AlumnosApp = () => {

  const [name, setName] = useState(" ");
  const [arrayAlumnos, setArrayAlumnos] = useState([]);

  const handleInput = event => {
    setName(event.target.value);
  };

  const insert = () => {
    setArrayAlumnos([...arrayAlumnos, name]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input className="w-100 form-control" onChange={handleInput} placeholder="Enter name" />
        </div>
        <div className="col-12">
          <button className="btn btn-primary w-100 mt-2" onClick={insert}>Insertar</button>
        </div>
      </div>

      <hr></hr>
      <AlumnosListadoApp value={arrayAlumnos}></AlumnosListadoApp>
    </div>
  );
}