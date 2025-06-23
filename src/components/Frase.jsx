import Card from "react-bootstrap/Card";

const Frase = () => {
  return (
    <Card className="align-items-center">
      <Card.Img variant="top" src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" className="w-50 personaje-img"/>
      <Card.Body>
        <Card.Title>Nelson Muntz</Card.Title>
        <Card.Text>
          Shoplifting is a victimless crime, like punching someone in the dark.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Frase;
