import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: 0px 4px 4px var(--grey-3);
  background-color: var(--white);
  padding: 0.5rem;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  @media screen and (min-width: 800px) {
    width: 90%;
    max-width: 60rem;
    height: fit-content;
    max-height: 80vh;
  }
`;

export default Container;
