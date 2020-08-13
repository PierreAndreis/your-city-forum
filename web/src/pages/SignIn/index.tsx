import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input, Button } from '../../components';

import {
  Container,
  Content,
  ContainerAnimated,
  ButtonsContainer,
} from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

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
