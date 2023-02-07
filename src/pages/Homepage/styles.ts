import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-x: hidden;

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
    }

    @media screen and (min-width: 775px) {
      .title {
        justify-content: space-between;
      }
    }
  }
`;

export default Container;
