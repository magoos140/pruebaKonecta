import React, { useEffect, useState } from 'react';
import '../css/App.css';
import { getUserId } from '../api/getInfo/getUserId';
import { getAllUsers } from '../api/getInfo/getAllUsers';
import { newAdmin } from '../api/admin/newAdmin';

const Employ = () => {
    const [empleados, setEmpleados] = useState([]);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const userId = localStorage.getItem('id');
                if (userId) {
                    const response = await getUserId(userId);
                    setUserRole(response.usuario.id_rol);
                }
            } catch (error) {
                console.error('Error al obtener el rol del usuario:', error);
            }
        };

        fetchUserRole();

        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setEmpleados(response.usuarios);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleConcederPermiso = async (id) => {
        try {
            const userId = localStorage.getItem('id'); // Obtener el ID del usuario administrador
            if (userId) {
                await newAdmin(parseInt(userId), id); // Llamar a la función newAdmin con los IDs
                console.log('Permisos concedidos al usuario con ID:', id);
                alert('Permisos concedidos exitosamente.');
            } else {
                console.error('No se pudo obtener el ID del usuario administrador desde el localStorage.');
            }
        } catch (error) {
            console.error('Error al conceder permisos:', error);
            alert('Error al conceder permisos. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className='container__employees'>
            <h2>Lista de empleados</h2>
            <table className='table__employ'>
                <thead className='head__column'>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ingreso</th>
                        <th>Salario</th>
                        {userRole === 2 && <th>Permiso</th>}
                        {userRole === 2 && <th>Eliminar</th>}
                    </tr>
                </thead>
                <tbody className='body__column'>
                    {empleados.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.fecha_ingreso}</td>
                            <td>$ {empleado.salario}</td>
                            {userRole === 2 && (
                                <>
                                    <td>
                                        <button onClick={() => handleConcederPermiso(empleado.id)}>Conceder</button>
                                    </td>
                                    <td>
                                        <button>Eliminar</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employ;
