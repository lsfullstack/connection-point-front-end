import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .main {
    width: 90%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;

    .title {
      display: flex;
      width: 90%;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      justify-content: space-between;

      h2 {
        color: var(--blue);
      }

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
      }

    }

    @media screen and (min-width: 775px) {
      .title {
        justify-content: space-between;

        .box {
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }

  .clients-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px var(--grey-3);
    box-shadow: 0px 4px 4px var(--grey-3)
  }
`;

export default Container;
