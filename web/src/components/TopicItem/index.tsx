import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';

import { Container } from './styles';

const TopicItem: React.FC = () => {
  return (
    <Container>
      <Link to="/topic">
        <section>
          <FiMessageSquare />
          <h2>Buraco na rua Chile</h2>
        </section>

        <aside>
          <strong>
            Votos <span>0</span>
          </strong>
        </aside>
      </Link>
    </Container>
  );
};

export default TopicItem;
