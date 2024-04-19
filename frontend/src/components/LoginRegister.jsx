import React, { useState } from "react";
import { registerUser } from "../api/register/registerUser";

const LoginRegister = () => {
  const [registroData, setRegistroData] = useState({
    correo: "",
    contraseña: "",
    nombre: "",
    salario: "",
    fecha_ingreso: "",
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [mensajeError, setMensajeError] = useState("");

  const handleRegistroChange = (e) => {
    const { name, value } = e.target;
    setRegistroData({ ...registroData, [name]: value });
  };

  const handleRegistroSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(registroData);
      console.log("Token recibido:", response.token);
      localStorage.setItem('token', response.token);
      setRegistroExitoso(true);
      setMensajeError("");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      // Muestra el mensaje de error
      setMensajeError("Hubo un error al registrar el usuario. Por favor, intenta nuevamente.");
      setRegistroExitoso(false);
    }
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
              required
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="correo"
              value={registroData.correo}
              onChange={handleRegistroChange}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="contraseña"
              value={registroData.contraseña}
              onChange={handleRegistroChange}
              required
            />
          </label>
          <label>
            Salario:
            <input
              type="number"
              name="salario"
              value={registroData.salario}
              onChange={handleRegistroChange}
              required
            />
          </label>
          <label>
            Fecha de ingreso:
            <input
              type="date"
              name="fecha_ingreso"
              value={registroData.fechaIngreso}
              onChange={handleRegistroChange}
              required
            />
          </label>
          <div className="button__container">
          <button type="submit" className="button__form">Registrarse</button>
        {registroExitoso && <p className="registro__exitoso">Registro exitoso. Ahora puedes iniciar sesion</p>}
          {mensajeError && <p className="mensaje__error">{mensajeError}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
