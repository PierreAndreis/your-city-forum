import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Header, MarkdownViewer, Loading } from '../../components';

import { Container, Wrapper, ContentContainer, TopicContainer } from './styles';

interface RouteParams {
  opinionId: number;
}

interface Upvotes {
  opinion_id: number;
  user_id: string;
}

interface Opinion {
  id: number;
  title: string;
  content: string;
  upvotes: Upvotes[];
}

const ShowTopic: React.FC = () => {
  const routeParams = useLocation<RouteParams>();
  const { push } = useHistory();

  const [loading, setLoading] = useState(false);
  const [opinion, setOpinion] = useState<Opinion>({} as Opinion);

  useEffect(() => {
    if (!routeParams.state) {
      push('/dashboard');

      return;
    }

    const { opinionId } = routeParams.state;

    async function loadData(): Promise<void> {
      try {
        setLoading(true);

        const response = await api.get(`/opinions/${opinionId}`);

        setOpinion(response.data);
      } catch (err) {
        toast('Erro inesperado, relogue e tente novamente', { type: 'error' });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [routeParams.state, push]);

  const handlePlusClick = async (): Promise<void> => {
    const { opinionId } = routeParams.state;

    try {
      await api.post(`/opinions/${opinionId}/vote`);

      push('/dashboard');

      toast('Voto efetuado com sucesso!', { type: 'success' });
    } catch (err) {
      toast('Não permitido mais de um voto positivo por usuário', {
        type: 'error',
      });
    }
  };

  const handleMinusClick = async (): Promise<void> => {
    const { opinionId } = routeParams.state;

    try {
      await api.delete(`/opinions/${opinionId}/vote`);

      push('/dashboard');

      toast('Voto retirado com sucesso!', { type: 'success' });
    } catch (err) {
      toast('Não permitido mais de um voto negativo por usuário', {
        type: 'error',
      });
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <ContentContainer>
            {loading ? (
              <Loading
                containerStyle={{ marginTop: '-50px' }}
                size={70}
                color="#00FF66"
              />
            ) : (
              <TopicContainer>
                <MarkdownViewer className="preview" source={opinion.content} />
                <aside>
                  <button
                    aria-label="Plus vote"
                    type="button"
                    onClick={handlePlusClick}
                    data-testid="plus-vote-button"
                  >
                    <FiChevronUp />
                  </button>

                  <span>{opinion.upvotes?.length || 0}</span>

                  <button
                    aria-label="Minus vote"
                    type="button"
                    onClick={handleMinusClick}
                    data-testid="minus-vote-button"
                  >
                    <FiChevronDown />
                  </button>
                </aside>
              </TopicContainer>
            )}
          </ContentContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default ShowTopic;
