import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Container = styled(ReactMarkdown)`
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ theme: { colors } }) => colors.secundary};
  padding: 2rem 3rem;
  border-radius: 5px;
  margin: 0;
  width: 49%;
  color: white;
  word-break: break-all;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.textInDark};
    margin-top: 1.8rem;
    padding-bottom: 3.2rem;
    margin-bottom: 1.6rem;
  }

  p {
    display: flex;
    justify-content: flex-start;
    margin-top: 1.2rem;
    font-size: 2.2rem;

    img {
      margin: 0 auto;
    }
  }

  li {
    margin-bottom: 0.8rem;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 20rem;
    border-radius: 0.6rem;
  }

  pre {
    overflow: scroll;
  }

  code {
    background-color: ${({ theme: { colors } }) => colors.secundaryLighter};
    border: 1px solid ${({ theme: { colors } }) => colors.secundaryLighter};
    border-radius: 6px;
    padding: 0.6rem;
    line-height: 3.2rem;
    max-width: 50px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.primary};
    transition: color 400ms;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primaryDarker};
    }
  }
`;
