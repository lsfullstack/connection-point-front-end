import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 18.25rem;
  padding: 0.5rem;
  border: solid 1px var(--grey-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--white);
  font-weight: 500;
  background-color: var(--blue);

  p {
    font-size: 1rem;
  }
  
  div {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 1.5rem;
    }
  }

  :hover {
    box-shadow: 0px 4px 4px var(--grey-3);
    cursor: pointer;
  }
`;

export default Container;
