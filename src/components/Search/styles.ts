import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  input {
    padding: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    border-top: solid 2px var(--grey-3);
    border-bottom: solid 2px var(--grey-3);
    border-left: solid 2px var(--grey-3);
    border-right: none;
    width: 16rem;
    font-size: 1.2rem;
    width: 100%;
    max-width: 15rem;
    
    :focus {
      border-top: solid 2px var(--blue);
      border-bottom: solid 2px var(--blue);
      border-left: solid 2px var(--blue);
    }
  }
  
  .button {
    background-color: var(--blue);
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0.5rem 0.5rem 0;
    cursor: pointer;
    
    svg {
      color: white;
      font-size: 1.25rem;
    }
  }
`;

export default Container;
