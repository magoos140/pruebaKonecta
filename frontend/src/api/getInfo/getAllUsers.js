import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const getAllUsers = async (userData) => {
  try {
    const response = await axios.get(`${urlApi}/get/all-users`);
    console.log("Respuesta de la API en gel all data:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};