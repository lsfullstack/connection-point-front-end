import Container from "./styles";
import { FaSearch } from "react-icons/fa";

interface IClient {
  name: string,
  email: string,
  phone: string,
  age: number | string,
}

const Client = ({ name, email, phone, age }: IClient) => {
  return (
    <Container>
      <div className="name">
        <p>{name}</p>
      </div>

      <div className="email">
        <p>{email}</p>
      </div>

      <div className="phone">
        <p>{phone}</p>
      </div>

      <div className="age">
        <p>{age} Anos</p>
      </div>

      <div className="open">
        <FaSearch/>
      </div>
    </Container>
  );
}

export default Client;
