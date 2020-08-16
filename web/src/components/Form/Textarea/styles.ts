import styled from 'styled-components';

export const Container = styled.textarea`
  background: ${({ theme: { colors } }) => colors.secundaryDark};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
  border: none;
  padding: 20px;
  font-size: 22px;
  width: 100%;
`;
