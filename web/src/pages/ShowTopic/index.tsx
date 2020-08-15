import React from 'react';

import { Header, MarkdownViewer } from '../../components';

import { Container, Wrapper, ContentContainer, MarkDownEditor } from './styles';

const ShowTopic: React.FC = () => {
  const mdWhile = `## Test \n
  Paragrafer \n\n
  [Link](https://google.com) \n\n
  ![Link](https://github.com/Dtesch9.png) \n\n
  `;

  return (
    <Container>
      <Header />

      <Wrapper>
        <ContentContainer>
          <MarkDownEditor>
            <MarkdownViewer className="preview" source={mdWhile} />
          </MarkDownEditor>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default ShowTopic;
