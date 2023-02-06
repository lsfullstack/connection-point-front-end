import Container from "./styles";
import logo from "../../assets/logo.png";
import { RxExit } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
  const {logout, user} = useContext(AuthContext);

  return (
    <Container>
      <img src={logo} alt="logo-connection-point" />

      <div className="nav">
        <Link to="/home">Clientes</Link>
        <Link to="/profile">{user.name}</Link>
        <RxExit onClick={() => logout()}/>
      </div>
      <GiHamburgerMenu className="menu"/>
    </Container>
  );
}

export default Header;
