import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1rem;
  border: solid 1px var(--grey-3);
  border-radius: 0.5rem;
  font-weight: 500;
  
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .name {
    width: 80%;
    overflow: hidden;
  }

  .open {
    width: 20%;
    cursor: pointer;
    text-align: center;
    
    svg {
      font-size: 1rem;
    }
  }

  .email, .phone, .age {
    display: none;
  }

  :hover {
    box-shadow: 0px 4px 4px var(--grey-3);
  }

  @media screen and (min-width: 600px) {
    .name, .email {
      width: 40%;
    }
    
    .email {
      display: block;
      padding-left: 1rem;
    }
  }

  @media screen and (min-width: 800px) {
    .name, .email, .phone {
      width: 29%;
    }

    .phone {
      display: block;
      padding-left: 1rem;
    }

    .open {
      width: 12.5%;
    }
  }
  
  @media screen and (min-width: 950px) {
    .name, .email, .phone {
      width: 25%;
    }

    .age {
      display: block;
      padding-left: 0.5rem;
      width: 12.5%;
    }
  }
`;

export default Container;
