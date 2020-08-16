import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 6.4rem;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  background: ${({ theme: { colors } }) => colors.secundary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1330px;

  a {
    font-family: RobotoSlab;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.textInSecundary};
    letter-spacing: 0.1rem;
    transition: color 400ms;
    position: absolute;
    left: 50%;

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }

  button {
    height: 2rem;
    background: none;
    border: 0;
    color: ${({ theme: { colors } }) => colors.primary};
    transition: color 400ms;

    &:hover {
      color: red;
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 1.8rem;
      position: initial;
    }
  }
`;

export const Profile = styled.aside`
  display: flex;
  align-items: center;

  img {
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    border: 0.3rem solid ${({ theme: { colors } }) => colors.primaryDarker};
  }

  strong {
    margin-left: 1.2rem;
    letter-spacing: 0.1rem;
  }

  span {
    margin-left: 0.4rem;
    font-family: RobotoSlab;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 600px) {
    strong {
      display: none;
    }

    span {
      display: none;
    }
  }
`;
