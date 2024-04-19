import React, { useState } from "react";

const LoginRegister = () => {
  const [registroData, setRegistroData] = useState({
    correo: "",
    contraseña: "",
    nombre: "",
    salario: "",
    fechaIngreso: "",
  });

  const handleRegistroChange = (e) => {
    const { name, value } = e.target;
    setRegistroData({ ...registroData, [name]: value });
  };

  const handleRegistroSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", registroData);
  };

  return (
    <div className="register__form_container">
      <div >
        <h2 className="form__title">Registrarse</h2>
        <form className="form__register" onSubmit={handleRegistroSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={registroData.nombre}
              onChange={handleRegistroChange}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={registroData.correo}
              onChange={handleRegistroChange}
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="contraseña"
              value={registroData.contraseña}
              onChange={handleRegistroChange}
            />
          </label>
          <label>
            Salario:
            <input
              type="number"
              name="salario"
              value={registroData.salario}
              onChange={handleRegistroChange}
            />
          </label>
          <label>
            Fecha de ingreso:
            <input
              type="date"
              name="fechaIngreso"
              value={registroData.fechaIngreso}
              onChange={handleRegistroChange}
            />
          </label>
          <button type="submit" className="button__form">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
