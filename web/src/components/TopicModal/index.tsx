import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { FiEye, FiEyeOff, FiX } from 'react-icons/fi';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { FormData, TopicModalProps } from './types';

import { NakedInput, Textarea, MarkdownViewer, Loading } from '..';

import { Container, Content, ModalBox, Footer } from './styles';

const TopicModal: React.FC<TopicModalProps> = ({ closeModal, newTopic }) => {
  const [toggleMdViewer, setToggleMdViewer] = useState(false);
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleToggleViewer = (): void => {
    setToggleMdViewer(state => !state);
  };

  const handleTextareaChange = (mdValue: string): void => {
    setMarkdown(mdValue);
  };

  const handleSubmitForm = useCallback(
    async (payload: FormData) => {
      try {
        setLoading(true);

        const { title, content } = payload;

        const schema = Yup.object().shape({
          title: Yup.string().required('Preencha o título'),

          content: Yup.string().required('Preecha o conteúdo'),
        });

        await schema.validate(payload, { abortEarly: false });

        await api.post('/opinions', {
          title,
          content,
        });

        newTopic();

        setLoading(false);

        handleCloseModal();

        toast('Tópico criado com sucesso!', { type: 'success' });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          toast('Preecha todos os dados corretamente!', { type: 'warning' });

          setLoading(false);

          return;
        }

        toast(
          'Erro inesperado, verifique suas credenciais, relogue e tente novamente!',
          {
            type: 'error',
          },
        );

        setLoading(false);
      }
    },
    [newTopic, handleCloseModal],
  );

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
              data-testid="close-modal-button"
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
                  data-testid="toggle-viewer-button"
                >
                  {toggleMdViewer ? <FiEyeOff /> : <FiEye />}
                </button>

                <button type="submit" disabled={loading}>
                  {loading ? <Loading size={20} color="#fff" /> : 'Postar'}
                </button>
              </aside>
            </Footer>
          </Form>
        </ModalBox>
      </Content>
    </Container>
  );
};

export default TopicModal;
