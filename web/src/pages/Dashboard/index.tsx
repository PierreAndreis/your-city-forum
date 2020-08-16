import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { FiPlus } from 'react-icons/fi';

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

interface FormData {
  filter: string;
}

const Dashboard: React.FC = () => {
  const [toggleTopicVisible, setToggleTopicVisible] = useState(false);

  const handleToggleTopicModal = useCallback(() => {
    setToggleTopicVisible(state => !state);
  }, []);

  const handleSearchSubmit = useCallback((data: FormData) => {
    console.log(data);
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

            {/* <Loading
            containerStyle={{ marginTop: '-200px' }}
            size={70}
            color="#00FF66"
          /> */}

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

      {toggleTopicVisible && <TopicModal closeModal={handleToggleTopicModal} />}
    </>
  );
};

export default Dashboard;
