import React, { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ correo: "", contraseña: "" });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de inicio de sesión:", loginData);
    // Aquí puedes agregar la lógica para iniciar sesión
  };

  return (
    <div className="login__form_container">
      <h2 className="form__title">Iniciar sesión</h2>
      <form className="form__login" onSubmit={handleLoginSubmit}>
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={loginData.correo}
            onChange={handleLoginChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="contraseña"
            value={loginData.contraseña}
            onChange={handleLoginChange}
          />
        </label>
        <button type="submit" className="button__form">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
