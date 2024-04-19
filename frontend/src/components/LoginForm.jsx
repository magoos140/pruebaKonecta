import React, { useState } from "react";
import { loginUser } from "../api/login/loginUser";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ correo: "", contraseña: "" });
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate(); // Obtener la función de navegación

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza el inicio de sesión utilizando la función loginUser
      const response = await loginUser(loginData);
      console.log("Datos de inicio de sesión:", response);
      
      // Almacena el token y el id en localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('id', response.id);
      
      // Muestra un mensaje de inicio de sesión exitoso y espera 2 segundos antes de redireccionar
      setRegistroExitoso(true);
      setMensajeError("");
      setTimeout(() => {
        navigate('/dashboard'); // Redirige al dashboard después de 2 segundos
      }, 2000);
    } catch (error) {
      console.error("Error al iniciar sesión de usuario:", error);
      // Si hay un error al iniciar sesión, muestra un mensaje de error
      setMensajeError("Hubo un error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.");
      setRegistroExitoso(false);
    }
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
      {registroExitoso && <p className="registro__exitoso">Inicio de sesión exitoso. Por favor, espera...</p>}
      {mensajeError && <p className="mensaje__error">{mensajeError}</p>}
    </div>
  );
};

export default LoginForm;
