import Container from "./styles";
import logo from "../../assets/logo.png"
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container>
      <div className="main">
        <img src={logo} alt="logo-connection-point" />
        <Form>
          <Input
            id="name"
            label="Nome:"
            placeholder="Digite seu nome"
            type="text"
          />
          <Input
            id="username"
            label="Usuário:"
            placeholder="Digite seu usuário"
            type="text"
          />
          <Input
            id="email"
            label="Email:"
            placeholder="Digite seu email"
            type="text"
          />
          <Input
            id="password"
            label="Senha:"
            placeholder="Digite sua senha"
            type="password"
          />
          <Input
            id="confirm-password"
            label="Confirmação de Senha:"
            placeholder="Digite sua senha novamente"
            type="password"
          />

          <Button description="Cadastrar" background="--blue" hover="--blue-hover"/>
        </Form>
        <p>Já possui uma conta? <Link to="/login">Clique aqui</Link> e faça login!</p>
      </div>
    </Container>
  );
}

export default RegisterPage;
