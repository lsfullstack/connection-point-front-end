import Container from "./styles"

interface IInput {
  id: string,
  label: string,
  placeholder: string,
  type: string,
}

const Input = ({ id, label, placeholder, type }: IInput) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} type={type} />
    </Container>
  );
}

export default Input;
