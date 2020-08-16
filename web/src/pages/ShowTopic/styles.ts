import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 0 3.2rem;
  height: 100%;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  height: 100%;
`;

export const TopicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6.4rem 0;
  width: 100%;
  max-width: 80rem;
  border-radius: 5px;

  .preview {
    width: 100%;
    min-height: 50rem;
    border-radius: 5px 0 0 5px;
    transition: all 400ms;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 6.4rem;
    border-radius: 0 5px 5px 0;
    padding: 3.2rem 0;
    transition: all 400ms;
    background: ${({ theme: { colors } }) => colors.secundaryLight};

    button {
      background: none;
      border: 2px solid ${({ theme: { colors } }) => colors.primaryDarker};
      width: 60%;
      height: 3.2rem;
      cursor: pointer;
      transition: all 400ms;

      &:first-child {
        border-radius: 4px 4px 0 0;
      }

      &:last-child {
        border-radius: 0 0 4px 4px;
      }

      &:hover {
        border-color: ${({ theme: { colors } }) => colors.primaryLighter};
      }

      svg {
        font-size: 2.2rem;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      border-left: 2px solid ${({ theme: { colors } }) => colors.primaryDarker};
      border-right: 2px solid ${({ theme: { colors } }) => colors.primaryDarker};
      height: 3.2rem;
    }
  }

  @media (max-width: 700px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    pre,
    strong {
      transition: all 400ms;
      font-size: calc(100% + 0.4rem);
    }

    p {
      img {
        width: calc(min(18rem, 35vw)) !important;
      }
    }
  }
`;
