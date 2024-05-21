import React from "react";
import PropTypes from "prop-types";

const getsaludo = () => {
  return `hola `;
};
export const Apphelloword = ({ nombre, apellido, tittle }) => {
  return (
    <>
      <div>apphelloword</div>
      <p>esto es un parrafo de prueba</p>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        nihil pariatur ipsum, eligendi quam consequuntur, tempore vel neque
        corrupti maiores iure, voluptatum sed itaque nulla aperiam odit! In,
        vitae consectetur.
      </span>
      <p> {getsaludo()}</p>
      <h1>{nombre}</h1>
      <p>{apellido}</p>
      <p>{tittle}</p>
    </>
  );
};
Apphelloword.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
};

Apphelloword.defaultProps = {
  nombre: "no hay nombre requerido",
  apellido: "no hay apellido requerido",
  tittle: "la persona feliz",
};
