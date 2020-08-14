import React from 'react';

import { Header } from '../../components';

import { Container, Wrapper, ContentContainer } from './styles';

const ShowTopic: React.FC = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <ContentContainer />
      </Wrapper>
    </Container>
  );
};

export default ShowTopic;
