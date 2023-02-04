import Container from "./styles";

interface IButon {
  description: string,
  background: string,
  hover: string,
}

const Button = ({ description, background, hover }: IButon) => {
  return (
    <Container background={background} hover={hover} >
      {description}
    </Container>
  );
}

export default Button;
