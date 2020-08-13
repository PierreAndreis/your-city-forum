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

  html, body, #root {
  height: 100vh;
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
