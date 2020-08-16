import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  isFilled: number;
  isFocused: number;
}

const opacityShift = keyframes`
  0% {
    bottom: -1.5rem;
    opacity: 0;
    visibility: hidden;
  }
  5% {
    opacity: 1;
    bottom: -2.5rem;
    visibility: initial;
  }
  80% {
    opacity: 1;
    bottom: -2.5rem;
    visibility: initial;
  }
  100% {
    bottom: -1.5rem;
    opacity: 0;
    
  }
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  margin-top: 6.4rem;
  transition: all 500ms;

  border-bottom: 1px solid
    ${({ isFocused, theme: { colors } }) =>
      isFocused ? colors.primary : colors.labelInPrimary};

  label {
    width: 100%;
    color: ${({ theme: { colors } }) => colors.labelInPrimary};
    font-size: 1.8rem;

    svg {
      transition: all 500ms;

      color: ${({ isFocused, isFilled, theme: { colors } }) =>
        isFocused || isFilled ? colors.primary : colors.labelInPrimary};
    }
  }

  input {
    margin-top: 1.2rem;
    background: none;
    width: 100%;
    border: 0;
    line-height: 2.4rem;

    ::placeholder {
      color: ${({ theme: { colors } }) => colors.labelInDark};
    }
  }

  span {
    position: absolute;
    bottom: -2.5rem;
    text-align: center;

    width: 100%;
    height: 2.2rem;
    background-color: ${({ theme: { colors } }) => colors.primaryDarker};
    color: white;
    border-radius: 0 0 0.4rem 0.4rem;

    opacity: 0;
    visibility: hidden;

    animation: ${opacityShift} 4s ease-in-out backwards;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
