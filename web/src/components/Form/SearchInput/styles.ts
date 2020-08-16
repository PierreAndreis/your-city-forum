import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: number;
  isFilled: number;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  border-radius: 0.6rem;
  position: relative;
  background: ${({ theme: { colors } }) => colors.secundary};

  &::after {
    ${({ isFocused }) =>
      isFocused &&
      css`
        content: '';
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);
        width: 95%;
        height: 2px;
        background: ${({ theme: { colors } }) => colors.primaryDarker};
      `}
  }

  > button {
    width: 2rem;
    height: 2rem;
    background: none;
    border: 0;
    cursor: pointer;

    svg {
      transition: all 400ms;

      color: ${({ isFilled, isFocused, theme: { colors } }) =>
        (isFilled || isFocused) && colors.primaryDark};
    }
  }

  > input {
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    background: none;
    border: 0;
    border-radius: 0.6rem;
  }
`;
