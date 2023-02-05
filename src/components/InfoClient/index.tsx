import Container from "./styles";

const InfoClient = () => {
  return (
    <Container>
      <div className="name"><p>NOME</p></div>
      <div className="email"><p>EMAIL</p></div>
      <div className="phone"><p>TELEFONE</p></div>
      <div className="age"><p>IDADE</p></div>
      <div className="open"><p>ABRIR</p></div>
    </Container>
  );
}

export default InfoClient;
