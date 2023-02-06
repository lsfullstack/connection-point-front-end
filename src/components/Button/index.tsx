import Container from "./styles";

interface IButon {
  description: string,
  background: string,
  hover: string,
  onClick?: any
}

const Button = ({ description, background, hover, onClick }: IButon) => {
  return (
    <Container background={background} hover={hover} onClick={onClick}>
      {description}
    </Container>
  );
}

export default Button;
