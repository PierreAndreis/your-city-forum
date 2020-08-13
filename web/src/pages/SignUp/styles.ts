import styled from 'styled-components';

import backgroundImg from '../../assets/initial-background.jpeg';

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
