import { useContext } from "react";
import Client from "../../components/Client";
import Header from "../../components/Header";
import InfoClient from "../../components/InfoClient";
import MenuMobile from "../../components/MenuMobile";
import Register from "../../components/Register";
import Search from "../../components/Search";
import { HomeContext } from "../../contexts/HomeContext";
import Container from "./styles";

const Homepage = () => {
  const { clientsList, menu, setRegisterState } = useContext(HomeContext);

  return (
    <Container>
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
