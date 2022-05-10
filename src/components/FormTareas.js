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
        <ListaTareas arregloTareas={tareas} />
      </section>
    </>
  );
};

export default FormTareas;
