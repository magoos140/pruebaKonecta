import React from 'react'
import logo from '../images/logo_Konecta.svg';
import '../css/App.css'

const Header = () => {

    return (
      <div className='container__header'>
        <header className='header__konecta'>
            <div className='logo__konecta'>
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='titulo__container'>
                <h2 className='titulo__header'>Bienvenido</h2>
            </div>
        </header>
      </div>
    );
  };
  
  export default Header;
  