import React from 'react';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../contexts/auth/authContext';

import { Container, Wrapper, Profile } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container aria-label="Dashboard header">
      <Wrapper>
        <Profile>
          <img
            src="https://api.adorable.io/avatars/140/abott@adorable.png"
            alt="Avatar"
          />
          <strong>Olá</strong> <span>Dtesch</span>
        </Profile>

        <h1>Fórum</h1>

        <button aria-label="Logout" type="button" onClick={signOut}>
          <FiPower size={20} />
        </button>
      </Wrapper>
    </Container>
  );
};

export default Header;