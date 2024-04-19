import axios from 'axios';

const urlApi = process.env.REACT_APP_URL_API;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${urlApi}/usuarios/registro`, userData);
    console.log("Respuesta de la API:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};
