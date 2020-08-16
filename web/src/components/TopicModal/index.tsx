import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi';

import { NakedInput, Textarea, MarkdownViewer } from '..';

import { Container, Content, ModalBox, Footer } from './styles';

interface TopicModalProps {
  closeModal(): void;
}

interface FormData {
  title: string;
  content: string;
}

const TopicModal: React.FC<TopicModalProps> = ({ closeModal }) => {
  const [toggleMdViewer, setToggleMdViewer] = useState(false);
  const [markdown, setMarkdown] = useState('');

  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleToggleViewer = useCallback(() => {
    setToggleMdViewer(state => !state);
  }, []);

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

            <button
              type="button"
              aria-label="Close Button"
              onClick={handleCloseModal}
            >
              <FiX />
            </button>
          </header>

          <Form onSubmit={handleSubmitForm}>
            <div aria-label="Inputs container">
              <NakedInput name="title" placeholder="Título" />

              {toggleMdViewer ? (
                <MarkdownViewer
                  className="preview-markdown"
                  source={markdown}
                />
              ) : (
                <Textarea
                  name="content"
                  placeholder="Informe o problema"
                  retrieveValue={handleTextareaChange}
                  value={markdown}
                />
              )}
            </div>

            <Footer>
              <aside>
                <button
                  type="button"
                  aria-label="Markdown toggle button"
                  onClick={handleToggleViewer}
                >
                  {toggleMdViewer ? <FiEyeOff /> : <FiEye />}
                </button>

                <button type="submit">Postar</button>
              </aside>
            </Footer>
          </Form>
        </ModalBox>
      </Content>
    </Container>
  );
};

export default TopicModal;
