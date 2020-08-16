import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';

import { Container } from './styles';

interface Opinion {
  id: number;
  title: string;
  upvotes_count: number;
}

type TopicItemProps = {
  opinion: Opinion;
};

const TopicItem: React.FC<TopicItemProps> = ({ opinion }) => {
  return (
    <Container>
      <Link to="/topic">
        <section>
          <FiMessageSquare />
          <h2>{opinion.title}</h2>
        </section>

        <aside>
          <strong>
            Votos <span>{opinion.upvotes_count}</span>
          </strong>
        </aside>
      </Link>
    </Container>
  );
};

export default TopicItem;
