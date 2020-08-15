import React, { useState, ChangeEvent, useCallback } from 'react';

import { Header, MarkdownViewer } from '../../components';

import { Container, Wrapper, ContentContainer, MarkDownEditor } from './styles';

const ShowTopic: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>): void => {
      console.log(e.target.value);

      setMarkdown(e.target.value);
    },
    [],
  );

  return (
    <Container>
      <Header />

      <Wrapper>
        <ContentContainer>
          <MarkDownEditor>
            <textarea onChange={handleChange} value={markdown} />

            <MarkdownViewer className="preview" source={markdown} />
          </MarkDownEditor>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default ShowTopic;
