import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiLock, FiUser, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/auth/authContext';

import { Input, Button } from '../../components';

import {
  Container,
  Content,
  ContainerAnimated,
  ButtonsContainer,
} from './styles';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (payload: SignInFormData) => {
      const { username, password } = payload;

      await signIn({
        username,
        password,
      });
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <ContainerAnimated>
          <h1>Sign In</h1>

          <Form onSubmit={handleSubmit}>
            <Input
              name="username"
              autoComplete="off"
              label="Nome de usuário"
              icon={FiUser}
              placeholder="John Doe"
            />

            <Input
              name="password"
              type="password"
              label="Senha"
              icon={FiLock}
              placeholder="******"
            />

            <ButtonsContainer>
              <Button
                containerStyle={{ width: '48%' }}
                type="submit"
                icon={FiChevronRight}
              >
                Logar
              </Button>

              <Link to="/signup">Não tem conta ?</Link>
            </ButtonsContainer>
          </Form>
        </ContainerAnimated>
      </Content>
    </Container>
  );
};

export default SignIn;
