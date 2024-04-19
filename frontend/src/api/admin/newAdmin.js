import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const newAdmin = async (idUsuarioSolicitante, idUsuarioAModificar) => {
  try {
    const requestData = {
      id_usuario_solicitante: idUsuarioSolicitante,
      id_usuario_a_modificar: idUsuarioAModificar
    };

    const response = await axios.post(`${urlApi}/usuarios/convertir-administrador`, requestData);
    console.log("Respuesta de la API:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al conceder permisos:", error);
    throw error;
  }
};
