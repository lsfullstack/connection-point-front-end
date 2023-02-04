import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    width: 90%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }

    p {
      width: 90%;
      font-weight: 500;

      a {
        color: blue;
        font-weight: 600;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Container;
