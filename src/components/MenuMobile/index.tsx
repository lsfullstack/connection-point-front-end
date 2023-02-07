import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Container from "./styles"
import { HomeContext } from "../../contexts/HomeContext";

const MenuMobile = () => {
  const {logout} = useContext(AuthContext);
  const {setMenu} = useContext(HomeContext);

  return (
    <Container>
      <div>
        <Link to="/home" onClick={() => setMenu(false)}>Clientes</Link>
      </div>
      <div>
        <Link to="/login" onClick={() => {
          logout()
          setMenu(false)
        }} className="logout" >Sair</Link>
      </div>
    </Container>
  );
}

export default MenuMobile;
