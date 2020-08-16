import React from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import { Header, MarkdownViewer } from '../../components';

import { Container, Wrapper, ContentContainer, TopicContainer } from './styles';

const ShowTopic: React.FC = () => {
  const mdWhile = `## Test \n
  Github below \n\n
  [Dtesch](https://github.com/Dtesch9) \n\n
  ![Link](https://github.com/Dtesch9.png) \n\n
  `;

  return (
    <Container>
      <Header />

      <Wrapper>
        <ContentContainer>
          <TopicContainer>
            <MarkdownViewer className="preview" source={mdWhile} />
            <aside>
              <button type="button">
                <FiChevronUp />
              </button>
              <span>0</span>
              <button type="button">
                <FiChevronDown />
              </button>
            </aside>
          </TopicContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default ShowTopic;
