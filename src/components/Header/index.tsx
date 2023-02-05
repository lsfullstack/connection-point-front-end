import Container from "./styles"
import logo from "../../assets/logo.png"
import { RxExit } from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo-connection-point" />

      <div className="nav">
        <Link to="/home">Clientes</Link>
        <Link to="/profile">Perfil</Link>
        <Link to="/login"><RxExit/></Link>
      </div>
      <GiHamburgerMenu className="menu"/>
    </Container>
  );
}

export default Header;
