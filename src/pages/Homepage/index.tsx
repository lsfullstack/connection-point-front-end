import { useContext } from "react";
import { useForm } from "react-hook-form";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardLarge from "../../components/CardLarge";
import CardsContainer from "../../components/CardsContainer";
import Person from "../../components/Person";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Info from "../../components/Info";
import InfoCard from "../../components/InfoCard";
import InfoClient from "../../components/InfoPerson";
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
  const { clientsList, menu, registerState, setRegisterState, registerClient, clientState, setclientState } = useContext(HomeContext);
  const { register, handleSubmit } = useForm<IRegisterClient>();

  return (
    <Container>
      {
        clientState &&
        <Modal>
          <CardLarge>
            <InfoCard description="INFORMAÇÕES BÁSICAS" onClick={setclientState} state={false} />
              <Info name="Cliente Padrão" email="cliente.padrao@mail.com" phone="99999999999" age={30} />
            <Box>
              <h2>Contatos</h2>
              <Register description="ADICIONAR CONTATO" onClick={setRegisterState(false)}/>
            </Box>
            <CardsContainer>
              <InfoClient createdAt={false}/>
              
              <Person  name="Contato Padrão" email="contato.padrao@mail.com" phone="99999999999" age={30} state={false} onClick={setRegisterState}  />
              <Person  name="Contato Padrão" email="contato.padrao@mail.com" phone="99999999999" age={30} state={false} onClick={setRegisterState}  />
              <Person  name="Contato Padrão" email="contato.padrao@mail.com" phone="99999999999" age={30} state={false} onClick={setRegisterState}  />
              <Person  name="Contato Padrão" email="contato.padrao@mail.com" phone="99999999999" age={30} state={false} onClick={setRegisterState}  />

            </CardsContainer>
          </CardLarge>
        </Modal>
      }
      {
        registerState && 
        <Modal>
          <Card>
            <InfoCard description="CADASTRO DE CLIENTES"  onClick={setRegisterState} state={false} />

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
              <Box>
                <Register description="CADASTRAR CLIENTE" onClick={() => setRegisterState(true)}/>
                <Search/>
              </Box>
            </div>
            <CardsContainer>
              <InfoClient  createdAt={false}/>
              
              {
                clientsList.map(({id, name, email, phone, age}) => {
                  return (
                    <Person key={id} name={name} email={email} phone={phone} age={age} onClick={setclientState} state={true}/>
                  );
                })
              }
            </CardsContainer>
          </>
        }
      </div>
    </Container>
  );
}

export default Homepage;
