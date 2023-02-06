import Container from "./styles";
import logo from "../../assets/logo.png"
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface IRegister {
  name: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<IRegister>();
  const { registerUser } = useContext(AuthContext);

  return (
    <Container>
      <div className="main">
        <img src={logo} alt="logo-connection-point" />
        <Form handleSubmit={handleSubmit} formFunction={registerUser}>
          <Input
            id="name"
            label="Nome:"
            placeholder="Digite seu nome"
            type="text"
            register={register}
          />
          <Input
            id="username"
            label="Usuário:"
            placeholder="Digite seu usuário"
            type="text"
            register={register}
          />
          <Input
            id="email"
            label="Email:"
            placeholder="Digite seu email"
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
          <Input
            id="confirm-password"
            label="Confirmação de Senha:"
            placeholder="Digite sua senha novamente"
            type="password"
            register={register}
          />

          <Button description="Cadastrar" background="--blue" hover="--blue-hover"/>
        </Form>
        <p>Já possui uma conta? <Link to="/login">Faça login.</Link></p>
      </div>
    </Container>
  );
}

export default RegisterPage;
