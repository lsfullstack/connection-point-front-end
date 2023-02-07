import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1.25rem;

  svg {
    font-size: 1.75rem;
    cursor: pointer;
    transition: 300ms;

    :hover {
      color: var(--red-hover);

    }
  }
`;

export default Container;
