import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <p>El Lugar de los pasteles félices</p>
      <img
        src="https://rgcattfrrgacssjmacki.supabase.co/storage/v1/object/public/List%20and%20Others/cakefeliz.png"
        alt="Pastel"
        className="img-fluid"
        sizes="120px"
      />
    </Container>
  );
};
export default HomePage;
