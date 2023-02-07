import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 1rem;
  padding: 1rem 0;

  @media screen and (min-width: 775px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Container;
