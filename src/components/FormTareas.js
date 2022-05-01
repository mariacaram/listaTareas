import React from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  return (
    <>
      <form className="container my-5">
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            className="form-control"
          ></input>
          <button className="btn btn-outline-light " type="submit">
            {" "}
            Agregar
          </button>
        </div>
      </form>
      <section className="container"><ListaTareas/></section>
    </>
  );
};

export default FormTareas;
