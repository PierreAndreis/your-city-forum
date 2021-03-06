import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock, FiUser, FiChevronRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAuth } from '../../contexts/auth/authContext';
import getValidationsErrors from '../../utils/getValidationErrors';

import { SignInFormData } from './types';

import { SignInput, Button, Loading } from '../../components';

import {
  Container,
  Content,
  ContainerAnimated,
  ButtonsContainer,
} from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const { push } = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (payload: SignInFormData) => {
      try {
        setLoading(true);

        const { username, password } = payload;

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .matches(
              /^[a-zA-Z0-9]{4,30}$/,
              'Não utilize caracteres especiais | Min 4 Caracteres',
            )
            .required('Preencha seu nome de usuário'),

          password: Yup.string()
            .matches(
              /^[a-zA-Z0-9]{8,30}$/,
              'Não utilize caracteres especiais | Min 8 Caracteres',
            )
            .required('Preecha sua senha'),
        });

        await schema.validate(payload, { abortEarly: false });

        formRef.current?.reset();

        await signIn({
          username,
          password,
        });

        push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast(
          'Erro inesperado, verifique suas credenciais e tente novamente!',
          {
            type: 'error',
          },
        );
      } finally {
        setLoading(false);
      }
    },
    [signIn, push],
  );

  return (
    <Container>
      <Content>
        <ContainerAnimated>
          <h1>Sign In</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <SignInput
              name="username"
              autoComplete="off"
              label="Nome de usuário"
              icon={FiUser}
              placeholder="John Doe"
            />

            <SignInput
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
                disabled={loading}
              >
                {loading ? <Loading size={20} color="#fff" /> : 'Logar'}
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
