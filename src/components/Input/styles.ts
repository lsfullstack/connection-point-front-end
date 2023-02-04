import styled from "styled-components";

const Container = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  label {
    font-weight: 500;
  }
  
  input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: solid 2px var(--grey-3);
    
    :focus {
      border: solid 2px var(--blue);
      box-shadow: 0px 4px 4px var(--grey-3);
    }
  }
`;

export default Container;
