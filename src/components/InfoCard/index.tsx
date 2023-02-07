import { MdClose } from "react-icons/md";
import Container from "./styles"

interface IInfoCard {
  description: string,
  onClick: any,
  state: boolean,
}

const InfoCard = ({description, onClick, state}: IInfoCard) => {

  return (
    <Container>
      <p>{description}</p>
      <MdClose onClick={() => onClick(state)}/>
    </Container>
  );
}

export default InfoCard;
