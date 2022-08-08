import { css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", "sans-serif";
  }

  button {
    padding: 1em 2em;
    background-color: #00b4d8;
    border: none;
    border-radius: 8px;
    font-family: "Poppins", "sans-serif";
    font-weight: 600;
    color: white;
    letter-spacing: 1px;
    font-size: 1rem;
    margin: 0.5em;
  }

  button:hover {
    cursor: pointer;
    background-color: #04a0bf;
  }

  input {
    font-family: "Poppins", "sans-serif";
  }
`;

export default globalStyles;
