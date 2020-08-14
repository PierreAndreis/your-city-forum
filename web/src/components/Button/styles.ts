import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4.6rem;

  background-color: ${({ theme: { colors } }) => colors.primaryDark};

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    height: 100%;
    background: none;
    border: 0;
    padding: 0 3.2rem;
    cursor: pointer;
    transition: background-color 400ms;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.primaryDarker};
    }
  }
`;
