//De esta manera se puede crear un custom Hook el cual puede ser invocado
//desde varias partes de la app
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  //El Hook useState nos devuelve un array con dos elementos:
  //la primera posición es el valor de nuestro estado, la segunda es
  //una función que nos permite actualizar ese valor.
  const [videos, setVideos] = useState([]);

  //El Hook useEffect nos permite ejecutar código cuando se monta,
  //desmonta o actualiza nuestro componente.
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []); //El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código
  return videos; //se retorna el estado
};

export default useInitialState;
