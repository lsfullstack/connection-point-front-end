import Button from "../Button";
import Container from "./styles";

interface IInfoClient {
  name: string,
  email: string,
  phone: string,
  age: number,
}

const Info = ({name, email, phone, age}: IInfoClient) => {

  return (
    <Container>
      <div className="basic-info">
        <span>Nome: <p>{name}</p></span>
        <span>Email: <p>{email}</p></span>
        <span>Telefone: <p>{`(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`}</p></span>
        <span>Idade: <p>{age} Anos</p></span>
      </div>
      <div className="buttons">
        <Button description="EDITAR" background="--blue" hover="--blue-hover" />
        <Button description="EXCLUIR" background="--red" hover="--red-hover"/>
      </div>
    </Container>
  );
}

export default Info;
