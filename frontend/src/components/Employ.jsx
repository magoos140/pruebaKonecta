import React from 'react';
import '../css/App.css';

const Employ = () => {
    const empleados = [
        { id: 1, nombre: 'Juan Pérez', ingreso: '2024-04-20', salario: '$3000' },
        { id: 2, nombre: 'María Rodríguez', ingreso: '2023-08-15', salario: '$3500' },
        { id: 3, nombre: 'Carlos González', ingreso: '2022-11-10', salario: '$3200' },
        { id: 4, nombre: 'Laura Martínez', ingreso: '2021-06-25', salario: '$3800' },
        { id: 5, nombre: 'Pedro Sánchez', ingreso: '2020-02-12', salario: '$4000' },
    ];

    return (
        <div className='container__employees'>
            <h2>Lista de empleados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ingreso</th>
                        <th>Salario</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map(empleado => (
                        <tr key={empleado.id}>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.ingreso}</td>
                            <td>{empleado.salario}</td>
                            <td>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employ;
