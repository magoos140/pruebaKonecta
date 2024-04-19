import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Employ from '../components/Employ';
import { getUserId } from '../api/getInfo/getUserId';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('id');
        if (userId) {
            getUserId(userId)
                .then(data => {
                    setUserData(data.usuario);
                })
                .catch(error => {
                    console.error('Error al obtener el usuario:', error);
                });
        }
    }, []);

    return (
        <div className="app__container">
            <Header />
            <div className="container__title_app">
                <h2 className="title__app">
                    {userData && <span>Bienvenido, {userData.nombre}</span>}
                    {userData && userData.id_rol === 2 && (
                        <span className='dashboard__Role'> - Administrador●</span>
                    )}
                    {userData && userData.id_rol === 1 && <span className='dashboard__Role'> - Empleado●</span>}
                </h2>
            </div>
            <div className='container__employ'>
                <Employ />
            </div>
        </div>
    );
};

export default Dashboard;
