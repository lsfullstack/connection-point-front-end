import Container from "./styles";
import { FaSearch } from "react-icons/fa";

interface IPerson {
  name: string,
  email: string,
  phone: string,
  age?: number | string,
  createdAt?: Date | undefined,
  onClick: any,
  state: boolean,
}

const Person = ({ name, email, phone, age, createdAt, onClick, state }: IPerson) => {

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
        {
          age ?
          <p>{age} Anos</p>
          :
          <p>{createdAt?.toDateString()}</p>
        }
      </div>

      <div className="open"  onClick={() => onClick(state)}>
        <FaSearch/>
      </div>
    </Container>
  );
}

export default Person;
