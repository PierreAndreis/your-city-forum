import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: number;
  isFocused: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-top: 6.4rem;
  transition: all 500ms;

  border-bottom: 1px solid
    ${({ isFocused }) => (isFocused ? '#00FF66' : '#eee')};

  label {
    width: 100%;
    color: #858585;
    font-size: 1.8rem;

    svg {
      transition: all 500ms;

      color: ${({ isFocused, isFilled }) =>
        isFocused || isFilled ? '#00FF66' : '#eee'};
    }
  }

  input {
    margin-top: 1.2rem;
    background: none;
    width: 100%;
    border: 0;
    line-height: 2.4rem;

    ::placeholder {
      color: #a3a3a3;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
