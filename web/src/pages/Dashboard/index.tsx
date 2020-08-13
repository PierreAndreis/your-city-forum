import React from 'react';

import { useAuth } from '../../contexts/auth/authContext';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <h1>DashBoard</h1>
      <button type="button" onClick={signOut}>
        Logout
      </button>
    </Container>
  );
};

export default Dashboard;
