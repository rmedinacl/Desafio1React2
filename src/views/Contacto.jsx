import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ContactoPage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Cuentanos ¿En qué te podemos ayudar?</h1>
      <p>Rellena este formulario y nos pondremos con contacto contigo</p>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Label>Descripción</Form.Label>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>

        <Button variant="danger" type="submit" className="mt-2">
          enviar
        </Button>
      </Form>
    </Container>
  );
};
export default ContactoPage;
