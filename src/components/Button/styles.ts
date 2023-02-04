import styled from "styled-components";

interface PropTypeBg {
  background: string,
  hover: string,
};

const Container = styled.button.attrs((props: PropTypeBg) => ({
  background: props.background,
  hover: props.hover
}))<PropTypeBg>`
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  background-color: var(${(props) => props.background && props.background});
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  transition: 500ms;
  box-shadow: 0px 4px 4px var(--grey-3);

  :hover {
    background-color: var(${(props) => props.hover && props.hover});
  }
`;

export default Container;
