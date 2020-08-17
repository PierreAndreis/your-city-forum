import React from 'react';
import * as toastify from 'react-toastify';
import { fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import render from '../utils/render';

import api from '../../services/api';
import SignUp from '../../pages/SignUp';

const toastSpy = jest.spyOn(toastify, 'toast');

const mockPush = jest.fn();

const mockApi = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  useHistory: () => ({
    push: mockPush,
  }),
}));

describe('SignUp page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();
  });

  it('should be able to render SignUp page', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('Voltar para o Login <')).toBeTruthy();
  });

  it('should be able to register', async () => {
    mockApi.onPost('/register').reply(204);

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailInput = getByPlaceholderText('john@doe.com');
    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Cadastrar');

    fireEvent.change(emailInput, { target: { value: 'user@email.com' } });
    fireEvent.change(usernameInput, { target: { value: 'userName' } });
    fireEvent.change(passwordInput, { target: { value: 'userPassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith('Cadastro realizado com sucesso!', {
        type: 'success',
      });

      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });

  it('should not be able to register with invalid credential', async () => {
    mockApi.onPost('/register').reply(204);

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailInput = getByPlaceholderText('john@doe.com');
    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Cadastrar');

    fireEvent.change(emailInput, { target: { value: 'user@email.com' } });
    fireEvent.change(usernameInput, { target: { value: 'invalid-caracter' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid-caracter' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).not.toHaveBeenCalled();

      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  it('should display an toast message if api call fails', async () => {
    mockApi.onPost('/register').reply(500);

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const emailInput = getByPlaceholderText('john@doe.com');
    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Cadastrar');

    fireEvent.change(emailInput, { target: { value: 'user@email.com' } });
    fireEvent.change(usernameInput, { target: { value: 'userName' } });
    fireEvent.change(passwordInput, { target: { value: 'userPassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'Erro inesperado, verifique suas credenciais e tente novamente!',
        {
          type: 'error',
        },
      );

      expect(mockPush).not.toHaveBeenCalled();
    });
  });
});
