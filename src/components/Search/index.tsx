import Container from "./styles";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <Container>
      <input type="text" placeholder="Digite aqui..."/>
      <div className="button">
        <FaSearch/>
      </div>
    </Container>
  )
}

export default Search;
