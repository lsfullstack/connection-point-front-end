import Container from "./styles"

const Form = ({ children, handleSubmit, formFunction }: any) => {
  return (
    <Container onSubmit={handleSubmit(formFunction)}>
      {children}
    </Container>
  );
}

export default Form;
