import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { HomeContext } from "../../contexts/HomeContext";
import Container from "./styles"

interface IInfoCard {
  description: string,
}

const InfoCard = ({description}: IInfoCard) => {
  const { setRegisterState } = useContext(HomeContext);

  return (
    <Container>
      <p>{description}</p>
      <MdClose onClick={() => setRegisterState(false)}/>
    </Container>
  );
}

export default InfoCard;
