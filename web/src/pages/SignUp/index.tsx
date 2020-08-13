import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Sign Up</h1>

        <Form onSubmit={() => {}}>
          <Input
            name="email"
            autoComplete="off"
            label="E-mail"
            icon={FiMail}
            placeholder="john@doe.com"
          />

          <Input
            name="name"
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
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
