import styled from 'styled-components';

export const Container = styled.textarea`
  background: ${({ theme: { colors } }) => colors.secundary};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
  border: none;
  border-radius: 5px 0 0 5px;
  padding: 20px;
  font-size: 22px;
  width: 49%;
  min-height: 50rem;
`;
