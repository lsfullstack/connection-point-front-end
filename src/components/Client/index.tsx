import Container from "./styles";
import { FaSearch } from "react-icons/fa";

interface IClient {
  name: string,
  email: string,
  phone: string,
  age: number | string,
  onClick: any,
  state: boolean,
}

const Client = ({ name, email, phone, age, onClick, state }: IClient) => {
  return (
    <Container>
      <div className="name">
        <p>{name}</p>
      </div>

      <div className="email">
        <p>{email}</p>
      </div>

      <div className="phone">
        <p>{`(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`}</p>
      </div>

      <div className="age">
        <p>{age} Anos</p>
      </div>

      <div className="open"  onClick={() => onClick(state)}>
        <FaSearch/>
      </div>
    </Container>
  );
}

export default Client;
