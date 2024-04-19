import React from 'react';
import logo from '../images/logo_Konecta.svg';
import '../css/App.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Función para manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
  };

  // Verificar si hay un token en el localStorage
  const token = localStorage.getItem('token');

  return (
    <div className='container__header'>
      <header className='header__konecta'>
        <div className='logo__konecta'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='titulo__container'>
          {token ? (
            // Mostrar el botón de logout solo si hay un token presente
            <button onClick={handleLogout} className="logout__button">Logout</button>
          ) : (
            // Mostrar el mensaje de bienvenida si no hay un token presente
            <h2 className='titulo__header'>Bienvenido</h2>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
