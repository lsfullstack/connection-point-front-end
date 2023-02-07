import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
    
  .basic-info {
    padding: 1rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      display: flex;
      gap: 0.5rem;
      font-weight: 500;
      font-size: 1.25rem;
    }

    p {
      font-weight: 400;
    }
  }

  .buttons {
    width: 90%;
    max-width: 25rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .basic-info {
      width: fit-content;

    }
    .buttons {
      width: 7rem;
    }
  }
`;

export default Container;
