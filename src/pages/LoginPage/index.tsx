import Container from "./styles";
import logo from "../../assets/logo.png"
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";

interface ILogin {
  username: string,
  password: string,
  rememberme: boolean,
}

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<ILogin>();

  return (
    <Container>
      <div className="main">
        <img src={logo} alt="logo-connection-point" />
        <Form handleSubmit={handleSubmit} formFunction={signIn}>
          <Input 
            id="username" 
            label="Usuário:" 
            placeholder="Digite seu usuário" 
            type="text" 
            register={register}
          />
          <Input 
            id="password" 
            label="Senha:" 
            placeholder="Digite sua senha" 
            type="password" 
            register={register}
          />
          <fieldset className="box">
            <input type="checkbox" id="rememberme" {...register("rememberme")}/>
            <label htmlFor="rememberme">Lembrar de mim</label>
          </fieldset>
          <Button description="Login" background="--blue" hover="--blue-hover"/>
        </Form>
        <p>Não possui uma conta? <Link to="/cadastro">Cadastre-se!</Link></p>
      </div>
    </Container>
  );
}

export default LoginPage;
