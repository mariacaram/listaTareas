import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde el evento submit");
    setTareas([...tareas, tareaIndividual]);
    setTareaIndividual(" ");
  };
  const borrarTarea = (nombre) => {
    let arregloModificado = tareas.filter((tarea) => {
      return tarea !== nombre;
    });
    console.log(arregloModificado);
    setTareas(arregloModificado)
  };
  return (
    <>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
            onChange={(e) => setTareaIndividual(e.target.value)}
            value={tareaIndividual}
          ></input>
          <button className="btn btn-outline-light " type="submit">
            {" "}
            Agregar
          </button>
        </div>
      </form>
      <section className="container">
        <ListaTareas arregloTareas={tareas} borrarTarea={borrarTarea} />
      </section>
    </>
  );
};

export default FormTareas;
