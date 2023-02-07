import Container from "./styles";
import logo from "../../assets/logo.png";
import { RxExit } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

const Header = () => {
  const {logout} = useContext(AuthContext);
  const {menu, setMenu} = useContext(HomeContext);

  return (
    <Container>
      <img src={logo} alt="logo-connection-point" />

      <div className="nav">
        <Link to="/home">Clientes</Link>
        <RxExit onClick={() => logout()}/>
      </div>
      <GiHamburgerMenu className="menu" onClick={() => menu ? setMenu(false) : setMenu(true)}/>
    </Container>
  );
}

export default Header;
