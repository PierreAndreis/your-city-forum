import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

import { Container } from './styles';

const TopicItem: React.FC = () => {
  return (
    <Container>
      <a href="/#">
        <section>
          <FiMessageSquare />
          <h2>Buraco na rua Chile</h2>
        </section>

        <aside>
          <strong>
            Votos <span>0</span>
          </strong>
        </aside>
      </a>
    </Container>
  );
};

export default TopicItem;
