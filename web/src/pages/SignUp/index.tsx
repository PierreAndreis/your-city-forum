import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiUser, FiChevronRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '../../services/api';
import getValidationsErrors from '../../utils/getValidationErrors';
import { Input, Button, Loading } from '../../components';

import {
  Container,
  Content,
  ContainerAnimated,
  ButtonsContainer,
} from './styles';

interface SignUpFormData {
  email: string;
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { push } = useHistory();
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (payload: SignUpFormData) => {
      try {
        setLoading(true);

        const { email, username, password } = payload;

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Email inválido')
            .required('Preencha seu email'),

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

        await api.post('/register', {
          email,
          username,
          password,
        });

        toast('Cadastro realizado com sucesso!', {
          type: 'success',
        });

        push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
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
    [push],
  );

  return (
    <Container>
      <Content>
        <ContainerAnimated>
          <h1>Sign Up</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              autoComplete="off"
              label="E-mail"
              icon={FiMail}
              placeholder="john@doe.com"
            />

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
                disabled={loading}
              >
                {loading ? <Loading size={20} color="#fff" /> : 'Cadastrar'}
              </Button>

              <Link to="/">{`Voltar para o Login <`}</Link>
            </ButtonsContainer>
          </Form>
        </ContainerAnimated>
      </Content>
    </Container>
  );
};

export default SignUp;
