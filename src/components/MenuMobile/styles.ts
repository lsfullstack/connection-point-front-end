import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background: var(--white);
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    border-bottom: solid 2px var(--grey-3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    a {
      text-decoration: none;
      color: var(--blue);
      font-weight: 500;
      font-size: 1.5rem;
    }

    .logout {
      color: var(--red-hover);
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }

`;

export default Container;
