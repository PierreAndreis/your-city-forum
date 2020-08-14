import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiPlus } from 'react-icons/fi';

import { Header, SearchInput, TopicItem } from '../../components';

import {
  Container,
  Wrapper,
  ContentContainer,
  ActionsContainer,
  TopicsList,
} from './styles';

interface FormData {
  filter: string;
}

const Dashboard: React.FC = () => {
  const handleSearchSubmit = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header />

      <Wrapper>
        <ContentContainer>
          <Form onSubmit={handleSearchSubmit}>
            <ActionsContainer>
              <SearchInput name="filter" />

              <button type="button">
                Criar tópico
                <FiPlus size={18} />
              </button>
            </ActionsContainer>
          </Form>

          <TopicsList>
            <TopicItem />

            <TopicItem />
            <TopicItem />
            <TopicItem />
            <TopicItem />
          </TopicsList>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
