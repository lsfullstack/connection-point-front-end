import { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Client from "../../components/Client";
import Form from "../../components/Form";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import InfoClient from "../../components/InfoClient";
import Input from "../../components/Input";
import MenuMobile from "../../components/MenuMobile";
import Modal from "../../components/Modal";
import Register from "../../components/Register";
import Search from "../../components/Search";
import { HomeContext } from "../../contexts/HomeContext";
import Container from "./styles";


interface IRegisterClient {
  name: string,
  email: string,
  phone: string,
  age: number,
}

const Homepage = () => {
  const { clientsList, menu, registerState, setRegisterState, registerClient } = useContext(HomeContext);
  const { register, handleSubmit } = useForm<IRegisterClient>();

  return (
    <Container>

      {
        registerState && 
        <Modal>
          <Card>
            <InfoCard description="CADASTRO DE CLIENTES"/>

            <Form handleSubmit={handleSubmit} formFunction={registerClient}>
              <Input
                id="name"
                label="Nome:"
                placeholder="Digite o nome"
                type="text"
                register={register}
              />
              <Input
                id="email"
                label="Email:"
                placeholder="Digite o email"
                type="text"
                register={register}
              />
              <Input
                id="phone"
                label="Telefone:"
                placeholder="Digite o telefone (apenas números)"
                type="text"
                register={register}
              />
              <Input
                id="age"
                label="Idade:"
                placeholder="Digite a idade"
                type="text"
                register={register}
              />
              <Button description="CANCELAR" background="--red" hover="--red-hover" onClick={() => setRegisterState(false)}/>
              <Button description="SALVAR" background="--blue" hover="--blue-hover" />
            </Form>
          </Card>
        </Modal>
      }

      <Header/>
      <div className="main">
        {
          menu ? <MenuMobile/>
          :
          <>
            <div className="title">
              <h2>CLIENTES</h2>
              <div className="box">
                <Register description="CADASTRAR CLIENTE" onClick={() => setRegisterState(true)}/>
                <Search/>
              </div>
            </div>
            <div className="clients-container">
              <InfoClient/>
              
              {
                clientsList.map(({id, name, email, phone, age}) => {
                  return (
                    <Client key={id} name={name} email={email} phone={phone} age={age}/>
                  );
                })
              }
            </div>
          </>
        }
      </div>
    </Container>
  );
}

export default Homepage;
