import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 6.4rem;
  position: relative;
  background: ${({ theme: { colors } }) => colors.secundary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  max-width: 1330px;

  h1 {
    font-family: RobotoSlab;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.textInSecundary};
    letter-spacing: 0.1rem;
    position: absolute;
    left: 50%;
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
    h1 {
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
