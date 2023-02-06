import Container from "./styles"

interface IInput {
  id: string,
  label: string,
  placeholder: string,
  type: string,
  register: any,
}

const Input = ({ id, label, placeholder, type, register }: IInput) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} type={type} autoComplete="off" {...register(id)}/>
    </Container>
  );
}

export default Input;
