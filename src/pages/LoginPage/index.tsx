import Container from "./styles";
import logo from "../../assets/logo.png"
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <div className="main">
        <img src={logo} alt="logo-connection-point" />
        <Form>
          <Input id="username" label="Usuário:" placeholder="Digite seu usuário" type="text"/>
          <Input id="password" label="Senha:" placeholder="Digite sua senha" type="password"/>
          <fieldset className="box">
            <input type="checkbox" id="rememberme" />
            <label htmlFor="rememberme">Lembrar de mim</label>
          </fieldset>
          <Button description="Login" background="--blue" hover="--blue-hover"/>
        </Form>
        <p>Ainda não possui uma conta? <Link to="/cadastro">Clique aqui</Link> e cadastre-se!</p>
      </div>
    </Container>
  );
}

export default LoginPage;
