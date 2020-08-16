import React, { useCallback } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import { Header, MarkdownViewer } from '../../components';

import { Container, Wrapper, ContentContainer, TopicContainer } from './styles';

const ShowTopic: React.FC = () => {
  const handlePlusClick = useCallback(() => {
    console.log('Plus');
  }, []);

  const handleMinusClick = useCallback(() => {
    console.log('Minus');
  }, []);

  const mdWhile = `## Contact Card \n
  Github below \n\n
  [Dtesch](https://github.com/Dtesch9) \n\n
  [LinkedIn](https://www.linkedin.com/in/douglas-tesch-00b7a518b/) \n\n
  ![Link](https://github.com/Dtesch9.png) \n\n
  `;

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <ContentContainer>
            <TopicContainer>
              <MarkdownViewer className="preview" source={mdWhile} />
              <aside>
                <button type="button" onClick={handlePlusClick}>
                  <FiChevronUp />
                </button>
                <span>0</span>
                <button type="button" onClick={handleMinusClick}>
                  <FiChevronDown />
                </button>
              </aside>
            </TopicContainer>
          </ContentContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default ShowTopic;
