import styled from 'styled-components';

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
`;

export const MarkDownEditor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6.4rem 0;

  textarea {
    background: ${({ theme: { colors } }) => colors.secundary};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    outline: none;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 20px;
    font-size: 22px;
    width: 49%;
    min-height: 50rem;
  }
`;
