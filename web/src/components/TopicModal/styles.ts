import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const ModalBox = styled.div`
  max-width: 900px;
  width: 100%;
  height: 62rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: ${({ theme: { colors } }) => colors.secundary};

  header {
    display: flex;
    align-items: center;
    padding: 2.4rem 3.8rem 0;

    h1 {
      font-weight: 500;
      font-size: 2.8rem;
      color: ${({ theme: { colors } }) => colors.labelInPrimary};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;

    div {
      padding: 0 3.8rem;

      input {
        background: ${({ theme: { colors } }) => colors.secundaryDark};
        border: none;
        border-radius: 6px;
        width: 100%;
        height: 4.8rem;
        margin-top: 2.4rem;
        padding: 0 3.2rem;
        font-weight: 600;
        letter-spacing: 0.1rem;

        &::placeholder {
          font-size: 2rem;
        }
      }

      textarea,
      .preview-markdown {
        margin-top: 1.2rem;
        padding: 1.6rem 3.2rem;
        height: 40rem !important;
        resize: none;
        border-radius: 6px;
        font-weight: 400;
        font-size: 2.2rem;
      }

      .preview-markdown {
        background: ${({ theme: { colors } }) => colors.secundaryDark};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        outline: none;
        border: none;
        width: 100%;
        overflow: auto;
      }
    }
  }

  @media (max-width: 700px) {
    header {
      h1 {
        font-size: 2.4rem;
      }
    }

    form {
      input {
        &::placeholder {
          font-size: 1.8rem;
        }
      }

      textarea,
      .preview {
        &::placeholder {
          font-size: 2rem;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  border-radius: 0 0 6px 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3.8rem;
  height: 7.5rem;

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.8rem;

    button {
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: all 400ms;

      &:first-child {
        background: ${({ theme: { colors } }) => colors.secundaryLighter};
        width: 4.8rem;
        height: 4.8rem;
      }

      &:last-child {
        background: ${({ theme: { colors } }) => colors.primaryDarker};
        margin-left: 0.8rem;
        width: 10rem;
        height: 4.8rem;
      }

      &:hover:first-child {
        color: ${({ theme: { colors } }) => colors.primary};
        background: ${({ theme: { colors } }) => colors.secundaryLight};
      }

      &:hover:last-child {
        color: ${({ theme: { colors } }) => colors.primary};
        background: ${({ theme: { colors } }) => colors.secundaryLight};
      }
    }
  }
`;
