import Container from "./styles";
import { MdAdd } from "react-icons/md";

interface IRegister {
  description: string,
}

const Register = ({ description }: IRegister) => {
  return (
    <Container>
      <p>{description}</p>
      <div>
        <MdAdd/>
      </div>
    </Container>
  );
}

export default Register;
