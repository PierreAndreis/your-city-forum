import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *::-webkit-scrollbar {
    width: 0.6rem;
  }

  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.primaryDarker};
    border-radius: 0.8rem;
    outline: 1px solid green;
  }

  html, body, #root {
    height: 100vh; /* min-height */
  }

  body {
    background: ${({ theme: { colors } }) => colors.background};
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Roboto;
    color: ${({ theme: { colors } }) => colors.textInPrimary};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
