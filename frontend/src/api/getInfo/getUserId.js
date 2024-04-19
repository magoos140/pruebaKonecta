import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const getUserId = async (userId) => {
  try {
    const response = await axios.get(`${urlApi}/get/${userId}`);
    console.log("Respuesta de la API para el usuario con ID", userId, ":", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al obtener usuario con ID", userId, ":", error);
    throw error;
  }
};
