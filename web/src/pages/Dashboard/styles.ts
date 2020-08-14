import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  } to { 
    transform: rotate(360deg); 
  }
`;

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
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 100%;
  height: 100%;

  form {
    width: 100%;
    margin: 3.2rem 0 6.4rem;
  }
`;

export const ActionsContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: auto 18rem;
  grid-column-gap: 1rem;
  align-items: flex-end;
  transition: all 400ms;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    background: none;
    border: 2px solid ${({ theme: { colors } }) => colors.primaryDarker};
    border-radius: 0.6rem;
    transition: all 400ms;
    cursor: pointer;

    svg {
      margin-left: 1rem;
      transition: all 400ms;
    }

    &:hover {
      border-color: ${({ theme: { colors } }) => colors.primaryLight};

      svg {
        color: ${({ theme: { colors } }) => colors.primaryLighter};

        animation: ${spin} 1s;
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 80%;
      margin-top: 1.6rem;
    }
  }
`;

export const TopicsList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
