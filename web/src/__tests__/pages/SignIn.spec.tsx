import React from 'react';
import * as toastify from 'react-toastify';
import { fireEvent, waitFor } from '@testing-library/react';

import render from '../utils/render';

import SignIn from '../../pages/SignIn';

const toastSpy = jest.spyOn(toastify, 'toast');

const mockPush = jest.fn();
const mockSignIn = jest.fn();

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  useHistory: () => ({
    push: mockPush,
  }),
}));

jest.mock('../../contexts/auth/authContext', () => ({
  useAuth: () => ({
    signIn: mockSignIn,
  }),
}));

describe('SignIn page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to render SignIn page', () => {
    const { getByText } = render(<SignIn />);

    expect(getByText('Não tem conta ?')).toBeTruthy();
  });

  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Logar');

    fireEvent.change(usernameInput, { target: { value: 'userName' } });
    fireEvent.change(passwordInput, { target: { value: 'userPassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Logar');

    fireEvent.change(usernameInput, { target: { value: 'invalid-caracter' } });
    fireEvent.change(passwordInput, { target: { value: 'invalid-caracter' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  it('should display a toast message if sign in fails', async () => {
    mockSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const usernameInput = getByPlaceholderText('John Doe');
    const passwordInput = getByPlaceholderText('******');

    const submitButton = getByText('Logar');

    fireEvent.change(usernameInput, { target: { value: 'userName' } });
    fireEvent.change(passwordInput, { target: { value: 'userPassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).not.toHaveBeenCalled();

      expect(toastSpy).toHaveBeenCalledWith(
        'Erro inesperado, verifique suas credenciais e tente novamente!',
        {
          type: 'error',
        },
      );
    });
  });
});
