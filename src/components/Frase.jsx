import Card from "react-bootstrap/Card";

const Frase = ({personaje}) => {
  return (
    <Card className="align-items-center">
      <Card.Img variant="top" src={personaje.image} className="w-50 personaje-img"/>
      <Card.Body>
        <Card.Title>{personaje.character}</Card.Title>
        <Card.Text>
          {personaje.quote}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Frase;
