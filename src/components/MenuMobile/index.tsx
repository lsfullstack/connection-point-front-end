import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Container from "./styles"
import { HomeContext } from "../../contexts/HomeProvider";

const MenuMobile = () => {
  const {Logout} = useContext(AuthContext);
  const {setMenu} = useContext(HomeContext);

  return (
    <Container>
      <div>
        <Link to="/home" onClick={() => setMenu(false)}>Clientes</Link>
      </div>
      <div>
        <Link to="/profile" onClick={() => setMenu(false)}>Perfil</Link>
      </div>
      <div>
        <Link to="/login" onClick={() => {
          Logout()
          setMenu(false)
        }} className="logout" >Sair</Link>
      </div>
    </Container>
  );
}

export default MenuMobile;
