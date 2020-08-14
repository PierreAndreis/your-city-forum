import React from 'react';
import { FaCircleNotch } from 'react-icons/fa';

import { Container } from './styles';

interface LoadingProps {
  size: number;
  color: string;
  containerStyle?: Record<string, unknown>;
}

const Loading: React.FC<LoadingProps> = props => {
  const { size, color, containerStyle = {} } = props;

  return (
    <Container style={containerStyle}>
      <FaCircleNotch data-testid="spinner-icon" size={size} color={color} />
    </Container>
  );
};

export default Loading;
