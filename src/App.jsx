import { Button, Container, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import logo from "./assets/logosimpson.png";
import { useState, useEffect } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    //todas las lineas que quiero que se ejecuten solo en montaje
    obtenerFrase();
  }, []);

  const obtenerFrase = async () => {
    try {
      setMostrarSpinner(true)
      //lo que quiero que si suceda
      console.log("aqui deberia pedir la frase");
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      if (respuesta.status === 200) {
        console.log(respuesta);
        const datos = await respuesta.json();
        console.log(datos[0]);
        //la respuesta de la api la guardo dentro del state
        setPersonaje(datos[0]);
        setMostrarSpinner(false)
      } else {
        console.log("ocurrio un error en el llamado de la api");
      }
    } catch (error) {
      console.error(error);
      //aqui agregaria alguna logica para mostrar un mensaje al usuario final
    }
  };

  return (
    <Container className="text-center my-4">
      <img src={logo} alt="Logo de los simpsons" className="w-100" />
      <h1 className="display-3 my-4">Frase simpsons</h1>
      {mostrarSpinner ? (
        <div className="my-5">
          <Spinner animation="grow" variant="light" />
        </div>
      ) : (
        <Frase personaje={personaje}></Frase>
      )}
      <Button variant="warning" className="mt-4" onClick={obtenerFrase}>
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
