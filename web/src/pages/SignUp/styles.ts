import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../assets/initial-background.jpeg';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const shiftOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.aside`
  animation: ${shiftOpacity} 1s;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 100%;
  max-width: 65rem;
  padding: 12.8rem;

  h1 {
    font-weight: 400;
    font-size: 2.8rem;
    margin-bottom: 6.4rem;
  }
`;

export const ContainerAnimated = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const ButtonsContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${({ theme: { colors } }) => colors.textInPrimary};
    transition: color 400ms;

    &:hover {
      color: ${({ theme: { colors } }) => colors.textInDark};
    }
  }
`;
