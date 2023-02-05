import Header from "../../components/Header";
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

        </div>
      </div>
    </Container>
  );
}

export default Homepage;
