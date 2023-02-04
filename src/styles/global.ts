import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --grey-1: #272727;
    --grey-2: #979797;
    --grey-3: #c7c7c7;
    --grey-4: #f5f5f5;
    --blue: #01579B;
    --blue-hover: #2C80C1;
    --red: #C62828;
    --red-hover: #E54B4B;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body, html {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  button {
    cursor: pointer;
  }
`;
