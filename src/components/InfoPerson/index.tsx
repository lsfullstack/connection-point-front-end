import Container from "./styles";

interface IInfoPerson {
  createdAt: boolean,
}

const InfoPerson = ({createdAt}: IInfoPerson) => {
  return (
    <Container>
      <div className="name"><p>NOME</p></div>
      <div className="email"><p>EMAIL</p></div>
      <div className="phone"><p>TELEFONE</p></div>
      <div className="age">
        {
          createdAt ?
          <p>REGISTRADO</p>
          :
          <p>IDADE</p>
        }
      </div>
      <div className="open"><p>ABRIR</p></div>
    </Container>
  );
}

export default InfoPerson;
