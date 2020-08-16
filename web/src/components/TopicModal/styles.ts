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
  height: 60rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1.6rem 3.8rem;
  background: ${({ theme: { colors } }) => colors.secundary};

  header {
    h1 {
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors.labelInPrimary};
    }
  }

  form {
    height: 40rem;

    input {
      background: ${({ theme: { colors } }) => colors.secundaryDark};
      border: none;
      border-radius: 6px;
      width: 100%;
      height: 4.8rem;
      margin-top: 2.4rem;
      padding: 0 3.2rem;

      &::placeholder {
        font-size: 2rem;
      }
    }

    textarea {
      margin-top: 1.2rem;
      height: 100%;
      resize: none;
      border-radius: 6px;
    }
  }
`;
