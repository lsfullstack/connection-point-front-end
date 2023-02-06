import Container from "./styles";
import { MdAdd } from "react-icons/md";

interface IRegister {
  description: string,
  onClick: any,
}

const Register = ({ description, onClick }: IRegister) => {
  return (
    <Container onClick={onClick}>
      <p>{description}</p>
      <div>
        <MdAdd/>
      </div>
    </Container>
  );
}

export default Register;
