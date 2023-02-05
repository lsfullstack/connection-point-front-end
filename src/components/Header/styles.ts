import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 4px 4px 0 var(--grey-3);
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  img {
    height: 100%;
  }

  
  .nav {
    display: none;
    align-items: center;
    gap: 2.5rem;
    height: 100%;
    
    a {
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--blue);
      cursor: pointer;
      transition: 500ms;

      :hover {
        color: var(--blue-hover);
        text-decoration: underline;
      }
    }

    svg {
      font-size: 2rem;
      color: var(--red-hover);
      cursor: pointer;
    }
  }
  
  .menu {
    font-size: 2rem;
    color: var(--grey-1);
  }

  @media screen and (min-width: 600px) {
    padding: 0 5rem;
  
    .menu {
      display: none;
    }

    .nav {
      display: flex;
    }
  }

`;

export default Container;
