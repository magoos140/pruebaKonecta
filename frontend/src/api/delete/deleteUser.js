const urlApi = process.env.REACT_APP_URL_API;

export const deleteUser = async (idUsuarioSolicitante, idUsuarioAEliminar) => {
  try {
    const requestData = {
      id_usuario_solicitante: idUsuarioSolicitante,
      id_usuario_a_eliminar: idUsuarioAEliminar
    };

    const response = await fetch(`${urlApi}/usuarios/eliminar`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    const responseData = await response.json();
    console.log("Respuesta de la API:", responseData);

    if (!response.ok) {
      throw new Error(responseData.message || 'Error al eliminar usuario');
    }

    return responseData;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
};
