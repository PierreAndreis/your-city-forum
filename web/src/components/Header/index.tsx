import React from 'react';
import { Link } from 'react-router-dom';
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

        <Link to="/">Fórum</Link>

        <button aria-label="Logout" type="button" onClick={signOut}>
          <FiPower size={20} />
        </button>
      </Wrapper>
    </Container>
  );
};

export default Header;
