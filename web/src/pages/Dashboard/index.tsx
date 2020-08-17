import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Form } from '@unform/web';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Header,
  SearchInput,
  TopicItem,
  Loading,
  TopicModal,
} from '../../components';

import {
  Container,
  Wrapper,
  ContentContainer,
  ActionsContainer,
  TopicsList,
} from './styles';

interface Opinion {
  id: number;
  title: string;
  upvotes_count: number;
}

interface ApiResponse {
  opinions: Opinion[];
}

interface FormData {
  filter: string;
}

const Dashboard: React.FC = () => {
  const [toggleTopicVisible, setToggleTopicVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opinions, setOpinions] = useState<Opinion[]>([]);
  const [filter, setFilter] = useState('');

  const filteredOpinions = useMemo(() => {
    if (filter) {
      return opinions.filter(opinion => {
        if (filter) {
          return opinion.title.toLowerCase() === filter.toLowerCase();
        }

        return opinion;
      });
    }

    return opinions;
  }, [opinions, filter]);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get<ApiResponse>('/opinions');

      setOpinions(response.data.opinions);
    } catch (err) {
      toast('Erro inesperado, relogue e tente novamente', { type: 'error' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleNewTopic = useCallback(() => {
    loadData();
  }, [loadData]);

  const handleToggleTopicModal = useCallback(() => {
    setToggleTopicVisible(state => !state);
  }, []);

  const handleSearchSubmit = useCallback((data: FormData) => {
    setFilter(data.filter);
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Wrapper>
          <ContentContainer>
            <Form onSubmit={handleSearchSubmit}>
              <ActionsContainer>
                <SearchInput name="filter" />

                <button type="button" onClick={handleToggleTopicModal}>
                  Criar tópico
                  <FiPlus size={18} />
                </button>
              </ActionsContainer>
            </Form>

            {loading ? (
              <Loading
                containerStyle={{ marginTop: '-200px' }}
                size={70}
                color="#00FF66"
              />
            ) : (
              <TopicsList>
                {filteredOpinions.map(opinion => (
                  <TopicItem key={opinion.id} opinion={opinion} />
                ))}
              </TopicsList>
            )}
          </ContentContainer>
        </Wrapper>
      </Container>

      {toggleTopicVisible && (
        <TopicModal
          newTopic={handleNewTopic}
          closeModal={handleToggleTopicModal}
        />
      )}
    </>
  );
};

export default Dashboard;
