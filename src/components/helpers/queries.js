const URL = process.env.REACT_APP_API_COLORES;

export const crearColorApi = async (color) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(color),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultarColoresApi = async () => {
    try {
        const respuesta = await fetch(URL);
        const listaColores =  await respuesta.json();
        return listaColores;      
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const borrarColorApi = async (id) => {
  try {
    const respuesta = await fetch(URL+"/"+id, {
      method:"DELETE"
    });
    console.log(respuesta)
    return respuesta
  } catch (error) {
    console.log(error);
    return false;
  }
}