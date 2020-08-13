import styled from 'styled-components';

interface ContainerProps {
  isFilled: number;
  isFocused: number;
}

export const Container = styled.div<ContainerProps>`
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
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
