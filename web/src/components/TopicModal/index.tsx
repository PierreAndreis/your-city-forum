import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';

import { NakedInput, Textarea } from '..';

import { Container, Content, ModalBox } from './styles';

interface FormData {
  title: string;
  content: string;
}

interface TopicModalProps {
  toggleTopic?(): void;
}

const TopicModal: React.FC<TopicModalProps> = ({ toggleTopic }) => {
  const [markdown, setMarkdown] = useState('');

  const handleTextareaChange = useCallback((mdValue: string) => {
    setMarkdown(mdValue);
  }, []);

  const handleSubmitForm = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <ModalBox>
          <header>
            <h1>Novo Tópico</h1>
          </header>

          <Form onSubmit={handleSubmitForm}>
            <NakedInput name="title" placeholder="Título" />

            <Textarea
              name="content"
              placeholder="Informe o problema"
              retrieveValue={handleTextareaChange}
            />

            <button type="submit">submit</button>
          </Form>
        </ModalBox>
      </Content>
    </Container>
  );
};

export default TopicModal;
