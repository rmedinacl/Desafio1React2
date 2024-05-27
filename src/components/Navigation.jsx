import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconHome, IconNotebook, IconCake } from "@tabler/icons-react";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="justify-content-start">
        <Link to="/" className="text-white ms-3 gap-2 text-decoration-none">
          <IconHome size={20} className="me-2" />
          Home
        </Link>

        <Link to="/contacto" className="text-white ms-3 text-decoration-none">
          <IconNotebook size={20} className="me-2" />
          Contacto
        </Link>
        <Link to="/" className=" ms-auto text-decoration-none">
          <Navbar.Brand className="ms-auto">
            <IconCake size={30} className="me-2" />
            Happy Cake
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
