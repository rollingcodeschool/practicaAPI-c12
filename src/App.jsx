import { Button, Container } from "react-bootstrap"
import Frase from "./components/Frase"
import logo from './assets/logosimpson.png'

function App() {
  return (
    <Container className="text-center my-4">
     <img src={logo} alt="Logo de los simpsons" className="w-100" />
     <h1 className="display-3 my-4">Frase simpsons</h1>
     <Frase></Frase>
     <Button variant="warning" className="mt-4">Obtener Frase</Button>
    </Container>
  )
}

export default App
