import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  & + div {
    margin-top: 1.2rem;
  }

  a {
    color: #fff;

    width: 100%;
    height: 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3.2rem;
    letter-spacing: 0.1rem;
    transition: all 400ms;
    border-radius: 0.6rem;
    border-left: 0.3rem solid
      ${({ theme: { colors } }) => colors.secundaryLight};
    background-color: ${({ theme: { colors } }) => colors.secundaryLight};

    &:hover {
      border-left-color: ${({ theme: { colors } }) => colors.primaryDarker};
      background-color: ${({ theme: { colors } }) => colors.secundary};
    }

    section {
      display: flex;
      align-items: center;

      svg {
        font-size: 3.8rem;
        margin-right: 2.4rem;
      }

      h2 {
        font-size: 2rem;
        color: ${({ theme: { colors } }) => colors.textInDark};
      }
    }

    aside {
      height: 100%;

      strong {
        display: flex;
        align-items: center;
        height: 100%;
        font-family: RobotoSlab;
        font-size: 2.4rem;
        letter-spacing: 0.1rem;
        color: ${({ theme: { colors } }) => colors.textInDark};

        span {
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          font-family: Roboto;
          margin-left: 3.8rem;
          color: ${({ theme: { colors } }) => colors.textInPrimary};

          &::before {
            content: '';
            width: 2px;
            height: 100%;
            background: ${({ theme: { colors } }) => colors.primaryDarker};
            position: absolute;
            left: -2.4rem;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    a {
      section {
        svg {
          font-size: 3.2rem;
        }

        h2 {
          font-size: calc(min(1.8rem, 4vw));

          @media (max-width: 360px) {
            width: 6.8rem;
          }
        }
      }

      aside {
        strong {
          font-size: 2rem;
        }
      }
    }
  }
`;
