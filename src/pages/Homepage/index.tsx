import { useContext } from "react";
import Client from "../../components/Client";
import Header from "../../components/Header";
import InfoClient from "../../components/InfoClient";
import Register from "../../components/Register";
import Search from "../../components/Search";
import Container from "./styles";

const Homepage = () => {

  return (
    <Container>
      <Header/>
      <div className="main">
        <div className="title">
          <h2>CLIENTES</h2>
          <div className="box">
            <Register description="CADASTRAR CLIENTE"/>
            <Search/>
          </div>
        </div>
        <div className="clients-container">
          <InfoClient/>
          <Client name="Cliente Padrão" email="clientepadrao@mail.com" phone="24999999999" age={30}/>

        </div>
      </div>
    </Container>
  );
}

export default Homepage;
